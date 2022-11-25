<?php
$file='phonebook-petrus.csv';
$lines=file($file);
$pb=array();
foreach($lines as $ln){
  $lcsv=str_getcsv($ln);
  $pb[$lcsv[0]][]=$lcsv[1];
}

foreach($pb as $nm=>$tel){
  vCard($nm,$tel);
}


function vCard($nm,$tel){
  echo "BEGIN:VCARD\n";
  echo "VERSION:3.0\n";
  echo "FN:".$nm."\n";
  foreach($tel as $t)
    echo "TEL;TYPE=CELL:".$t."\n";
  echo "END:VCARD\n";
}



