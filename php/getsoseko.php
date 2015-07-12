<?php
	require("koneksi.php");
	$query = "SELECT kecamatan, sosio_ekonomi FROM hitung_ahp ORDER BY sosio_ekonomi DESC";
	$result = mysql_query($query);
	echo "{ \"cols\": [ {\"id\":\"\",\"label\":\"Kecamatan\",\"pattern\":\"\",\"type\":\"string\"},
						{\"id\":\"\",\"label\":\"Aspek Sosio-Ekonomi\",\"pattern\":\"\",\"type\":\"number\"}
						], \"rows\": [ ";
	$total_rows = mysql_num_rows($result);
	$row_num = 0;
	//$rows=array();
	while ($row = mysql_fetch_assoc($result)) {
		//$rows[]=$row;
		$row_num++;
		if ($row_num == $total_rows)
			echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null},
							{\"v\":" . $row['sosio_ekonomi'] . ",\"f\":null}]}";
		else
			echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null},
							{\"v\":" . $row['sosio_ekonomi'] . ",\"f\":null}]}, ";
	}
	echo " ] }";
	//print json_encode($rows);
?>