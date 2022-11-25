<?php
 $lines=file('kal-2015.txt');
 $i=0;
 while($i<count($lines)){
		$tgl=trim($lines[$i++]);
		$pesta='';
		while(!preg_match('/[0-9]/',$lines[$i])) {
		   $pesta .= ' '.trim($lines[$i++]);
		}
		$pesta=trim($pesta);
		$bacaan=trim($lines[$i++]);
		$ofisi=trim($lines[$i++]);
		$warna=trim($lines[$i++]);
		echo sprintf("%s\t%s\t%s\t%s\t%s\n", $tgl, $pesta, $bacaan, $ofisi, $warna);
 }
