<?php
$host = "localhost";
$user = "root"; 
$pass = ""; 
$db = "peta"; 
$konek = mysql_connect($host, $user, $pass) or die ('Koneksi Gagal! : ' . mysql_error()); 
mysql_select_db($db); 
?>