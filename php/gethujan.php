<?php
	require("koneksi.php");
	$query = "SELECT kecamatan, curah_hujan FROM hitung_ahp ORDER BY curah_hujan DESC";
	$result = mysql_query($query);
	echo "{ \"cols\": [ {\"id\":\"\",\"label\":\"Kecamatan\",\"pattern\":\"\",\"type\":\"string\"},						
						{\"id\":\"\",\"label\":\"Curah Hujan\",\"pattern\":\"\",\"type\":\"number\"}						
						], \"rows\": [ ";
	$total_rows = mysql_num_rows($result);
	$row_num = 0;
	//$rows=array();
	while ($row = mysql_fetch_assoc($result)) {
		//$rows[]=$row;
		$row_num++;
		if ($row_num == $total_rows)
			echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null}, 							
							{\"v\":" . $row['curah_hujan'] . ",\"f\":null}]}";
		else
			echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null},							
							{\"v\":" . $row['curah_hujan'] . ",\"f\":null}]}, ";
	}
	echo " ] }";
	//print json_encode($rows);
?>