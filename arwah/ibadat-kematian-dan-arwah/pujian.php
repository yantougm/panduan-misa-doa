<?php
// pujian.php

$nfile='pujian.txt';
$lines=file($nfile);
$ALTVERSE=1;
$ALTVERSESPACE=2;
$VERSE=3;
$VERSESPACE=4;
$PARENTHESIS=5;
$SPACE=6;
$TEXT=7;
$state=0;
$firstLine=TRUE;

foreach($lines as $ln){
	$state=nextState($state,$ln);	
}

function nextState($state, $ln){
global $ALTVERSE, $ALTVERSESPACE, $VERSE, $VERSESPACE, $PARENTHESIS, $SPACE, $TEXT,
	$firstLine;
	$ln=trim($ln);
	if(preg_match('/\(.*\)(.*)/',$ln,$match))
		$input=$PARENTHESIS;
	elseif ((trim($ln)=='') or (preg_match('/[0-9]+/',$ln,$match2)))
	    $input=$SPACE;
	else
		$input=$TEXT;
		
	switch ($state){
		case 0:
			switch ($input){
				case $PARENTHESIS:
					echo "\n".'\subsection{'.$match[1].'}'."\n";
					echo "\begin{altverse}\n";
					$firstLine=TRUE;
					$nextState=$ALTVERSE;
					break;
				}
			break;
		case $ALTVERSE:
			switch ($input){
				case $PARENTHESIS:
					$nextState=$ALTVERSE;
					break;
				case $SPACE:
					echo "\n".'\end{altverse}'."\n";
					$nextState=$ALTVERSESPACE;
					break;
				case $TEXT:
					$nextState=$ALTVERSE;
					if(!$firstLine) 
						echo '\\\\'."\n";
					else
						$firstLine=FALSE;
					echo $ln;
					break;
			}
			break;
		case $ALTVERSESPACE:
			switch ($input){
				case $PARENTHESIS:
					echo "\n".'\subsection{'.$match[1].'}'."\n";
					echo "\begin{altverse}\n";
					$firstLine=TRUE;
					$nextState=$ALTVERSE;
					break;
				case $SPACE:
					$nextState=$ALTVERSESPACE;
					break;
				case $TEXT:
					echo "\n";
					echo "\begin{verse}\n";
					echo $ln;
					$nextState=$VERSE;
					break;
			}
			break;
		case $VERSE:
			switch ($input){
				case $PARENTHESIS:
					echo "\n".'\subsection{'.$match[1].'}'."\n";
					echo "\begin{altverse}\n";
					$firstLine=TRUE;
					$nextState=$ALTVERSE;
					break;
				case $SPACE:
					echo "\n".'\end{verse}'."\n";
					$nextState=$VERSESPACE;
					break;
				case $TEXT:
					$nextState=$VERSE;
					echo '\\\\'."\n{$ln}";
					break;
			}
			break;
		case $VERSESPACE:
			switch ($input){
				case $PARENTHESIS:
					echo "\n".'\subsection{'.$match[1].'}'."\n";
					echo "\begin{altverse}\n";
					$firstLine=TRUE;
					$nextState=$ALTVERSE;
					break;
				case $SPACE:
					$nextState=$ALTVERSESPACE;
					break;
				case $TEXT:
					$nextState=$ALTVERSE;
					echo "\n";
					echo "\begin{altverse}\n";
					echo $ln;
					break;
			}
			break;
	}
	return $nextState;
}
