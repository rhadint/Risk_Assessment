<?php
require("koneksi.php");

$center_lat = $_GET("lat");
$center_lng = $_GET("lng");
$radius = $_GET("radius");

$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

$query = sprintf("SELECT name, lat, lng, (6371*acos(cos(radians('%s'))*cos(radians(lat))*cos(radians(lng)-radians('$s'))+sin(radians('%s'))*sin(radians(lat)))) AS distance FROM markers HAVING distance < '%s' ORDER BY distance LIMIT 0, 20", 
	mysql_real_escape_string($center_lat),
	mysql_real_escape_string($center_lng),
	mysql_real_escape_string($center_lat),
	mysql_real_escape_string($radius));
$result = mysql_query($query);
if(!$result){
	die('Query salah: ' . mysql_error());
}

header("Content-type: text/xml");

while ($row = @mysql_fetch_assoc($result)) {
	$node = $dom->createElement("marker");
	$newnode = $parnode->appendChild($node);

	$newnode->setAttribute("name", $row['name']);
	$newnode->setAttribute("lat", $row['lat']);
	$newnode->setAttribute("lng", $row['lng']);
}

echo $dom->saveXML();

?>