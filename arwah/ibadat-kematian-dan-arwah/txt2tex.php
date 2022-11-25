<?php
// txt2tex.php

$nfile='100hari.txt';
$nfile=$argv[1];

$lines=file($nfile);
$ST_TEXT1=1;
$ST_TEXT2=2;
$ST_SPACE=3;
$ST_IPU=4;

$INP_SECTION=6;
$INP_TEXT=7;
$INP_I=8;
$INP_P=9;
$INP_U=10;
$INP_SPACE=11;

$state=$ST_SPACE;
$firstLine=TRUE;
$prevLine='';

foreach($lines as $ln){
	$state=nextState($state,$ln);	
}

function nextState($state, $ln){
global  $ST_SPACE, $ST_TEXT1, $ST_TEXT2, $ST_P, $ST_U,
		$INP_SECTION, $INP_TEXT, $INP_P, $INP_U, $INP_SPACE, 
		$firstLine, $prevLine;
	$ln=trim($ln);
	$match=array('','');
	if(preg_match('/^I\s*:\s*(.*)/',$ln,$match))
		$input=$INP_I;
	elseif(preg_match('/^P\s*:\s*(.*)/',$ln,$match))
		$input=$INP_P;
	elseif(preg_match('/^U\s*:\s*(.*)/',$ln,$match))
		$input=$INP_U;
	elseif ((trim($ln)=='') || preg_match('/^[0-9][0-9]*\s*$/',$ln,$match))
	    $input=$INP_SPACE;
	elseif(strtoupper($ln)==$ln)
		$input=$INP_SECTION;
	else
		$input=$INP_TEXT;
	$ln1=$match[1];	
//	echo 'state='.$state."\n".
//	     'isi='.$ln."\n".
//	     'input='.$input."\n\n";

	switch ($state){
		case $ST_SPACE:
			switch ($input){
				case $INP_SECTION:
					echo "\n".'\section*{'.$ln.'}'."\n";
					$nextState=$ST_SPACE;
					break;
				case $INP_SPACE:
					$nextState=$ST_SPACE;
					break;
				case $INP_I:
					echo "\n".'\BI{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_P:
					echo "\n".'\BP{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_U:
					echo "\n".'\BU{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_TEXT:
					$prevLine= $ln;
					$nextState=$ST_TEXT1;
					break;
				}
			break;
		case $ST_TEXT1:
			switch ($input){
				case $INP_SECTION:
					echo "\n".$prevLine;
					echo "\n".'\section*{'.$ln.'}'."\n";
					$nextState=$ST_SPACE;
					break;
				case $INP_SPACE:
					echo "\n".'\subsection*{'.$prevLine.'}';
					$nextState=$ST_SPACE;
					break;
				case $INP_I:
					echo "\n".$prevLine;
					echo "\n".'\BI{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_P:
					echo "\n".$prevLine;
					echo "\n".'\BP{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_U:
					echo "\n".$prevLine;
					echo "\n".'\BU{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_TEXT:
					echo "\n".$prevLine;
					echo "\n".$ln;
					$nextState=$ST_TEXT2;
					break;
			}
			break;
		case $ST_TEXT2:
			switch ($input){
				case $INP_SECTION:
					echo "\n".$prevLine;
					echo "\n".'\section*{'.$ln.'}'."\n";
					$nextState=$ST_SPACE;
					break;
				case $INP_SPACE:
					$nextState=$ST_SPACE;
					break;
				case $INP_I:
					echo "\n".'\BI{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_P:
					echo "\n".'\BP{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_U:
					echo "\n".'\BU{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_TEXT:
					echo "\n".$ln;
					$nextState=$ST_TEXT2;
					break;
			}
			break;
		case $ST_IPU:
			switch ($input){
				case $INP_SECTION:
					echo "}\n";
					echo "\n".'\section*{'.$ln.'}'."\n";
					$nextState=$ST_SPACE;
					break;
				case $INP_SPACE:
					echo "}\n";
					$nextState=$ST_SPACE;
					break;
				case $INP_I:
					echo "}\n".'\BI{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_P:
					echo "}\n".'\BP{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_U:
					echo "}\n".'\BU{'.$ln1;
					$nextState=$ST_IPU;
					break;
				case $INP_TEXT:
					echo "\n".$ln;
					$nextState=$ST_IPU;
					break;
			}
			break;
	}
	return $nextState;
}
