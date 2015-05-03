<?php
	require("koneksi.php");
	$query = "SELECT kecamatan, tma, curah_hujan, fisik, sosio_ekonomi, kbt, bobot FROM hitung_ahp ORDER BY bobot DESC";
	$result = mysql_query($query);
	echo "{ \"cols\": [ {\"id\":\"\",\"label\":\"Kecamatan\",\"pattern\":\"\",\"type\":\"string\"},
						{\"id\":\"\",\"label\":\"Tinggi Muka Air\",\"pattern\":\"\",\"type\":\"number\"},
						{\"id\":\"\",\"label\":\"Curah Hujan\",\"pattern\":\"\",\"type\":\"number\"},
						{\"id\":\"\",\"label\":\"Aspek Fisik\",\"pattern\":\"\",\"type\":\"number\"},
						{\"id\":\"\",\"label\":\"Aspek Sosio-Ekonomi\",\"pattern\":\"\",\"type\":\"number\"},
						{\"id\":\"\",\"label\":\"Kejadian Bencana Tercatat\",\"pattern\":\"\",\"type\":\"number\"},
						{\"id\":\"\",\"label\":\"Bobot\",\"pattern\":\"\",\"type\":\"number\"}
						], \"rows\": [ ";
	$total_rows = mysql_num_rows($result);
	$row_num = 0;
	//$rows=array();
	while ($row = mysql_fetch_assoc($result)) {
		//$rows[]=$row;
		$row_num++;
		if ($row_num == $total_rows)
			echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null}, 
							{\"v\":" . $row['tma'] . ",\"f\":null},
							{\"v\":" . $row['curah_hujan'] . ",\"f\":null},
							{\"v\":" . $row['fisik'] . ",\"f\":null},
							{\"v\":" . $row['sosio_ekonomi'] . ",\"f\":null},
							{\"v\":" . $row['kbt'] . ",\"f\":null},
							{\"v\":" . $row['bobot'] . ",\"f\":null}]}";
		else
			echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null},
							{\"v\":" . $row['tma'] . ",\"f\":null},
							{\"v\":" . $row['curah_hujan'] . ",\"f\":null},
							{\"v\":" . $row['fisik'] . ",\"f\":null},
							{\"v\":" . $row['sosio_ekonomi'] . ",\"f\":null},
							{\"v\":" . $row['kbt'] . ",\"f\":null},
							{\"v\":" . $row['bobot'] . ",\"f\":null}]}, ";
	}
	echo " ] }";
	//print json_encode($rows);
?>