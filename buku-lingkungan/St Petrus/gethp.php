<?php
$lines=file("Dtumat.csv");
foreach($lines as $line){
	$data=str_getcsv($line);
	$hps=preg_split("/,/",$data[1]);
	foreach($hps as $hp) {
	  $hp=str_replace(array(" ","-"),"",$hp);
	  if(substr($hp,0,1)<>"0") $hp ="0274".$hp;
	  echo "\"".$data[0]."\",\"".$hp."\"\n";
	}  
}
?>
