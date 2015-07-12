<?php
require("koneksi.php");

$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

$query = "SELECT * FROM markers";
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