<?php
require("koneksi.php");

$name = $_GET('name');
$lat = $_GET('lat');
$lng = $_GET('lng');

$query = sprintf("INSERT INTO markers " .
	" (id, name, lat, lng ) " .
	"VALUES (NULL, '%s', '%s', '%s');",
	mysql_real_escape_string($name),
	mysql_real_escape_string($lat),
	mysql_real_escape_string($lng));
$result = mysql_query($query);
if(!$result){
	die('Query salah: ' . mysql_error());
}
?>