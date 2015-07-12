<?php
	require("koneksi.php");
	/*if (isset($_POST['id'])) {
		alert("masuk");
		$option=$_POST['id'];		
	}	
	if ($option==0) {
	}
	$str_json = file_get_contents('php://input');*/
	$var = $_GET['kode'];
	if ($var=='ahp') {
		$query = "SELECT kecamatan, bobot FROM hitung_ahp ORDER BY bobot DESC";
		$result = mysql_query($query);
		echo "{ \"cols\": [ {\"id\":\"\",\"label\":\"Kecamatan\",\"pattern\":\"\",\"type\":\"string\"},
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
								{\"v\":" . $row['bobot'] . ",\"f\":null}]}";
			else
				echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null},
								{\"v\":" . $row['bobot'] . ",\"f\":null}]}, ";
		}
		echo " ] }";
		//print json_encode($rows);
	} elseif ($var=='tma') {
		$query = "SELECT kecamatan, tma FROM hitung_ahp ORDER BY tma DESC";
		$result = mysql_query($query);
		echo "{ \"cols\": [ {\"id\":\"\",\"label\":\"Kecamatan\",\"pattern\":\"\",\"type\":\"string\"},
							{\"id\":\"\",\"label\":\"Tinggi Muka Air\",\"pattern\":\"\",\"type\":\"number\"}						
							], \"rows\": [ ";
		$total_rows = mysql_num_rows($result);
		$row_num = 0;
		//$rows=array();
		while ($row = mysql_fetch_assoc($result)) {
			//$rows[]=$row;
			$row_num++;
			if ($row_num == $total_rows)
				echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null}, 
								{\"v\":" . $row['tma'] . ",\"f\":null}]}";
			else
				echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null},
								{\"v\":" . $row['tma'] . ",\"f\":null}]}, ";
		}
		echo " ] }";
	} elseif ($var=='ch') {
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
	} elseif ($var=='kbt') {
		$query = "SELECT kecamatan, kbt FROM hitung_ahp ORDER BY kbt DESC";
		$result = mysql_query($query);
		echo "{ \"cols\": [ {\"id\":\"\",\"label\":\"Kecamatan\",\"pattern\":\"\",\"type\":\"string\"},						
							{\"id\":\"\",\"label\":\"Kejadian Bencana Tercatat\",\"pattern\":\"\",\"type\":\"number\"}
							], \"rows\": [ ";
		$total_rows = mysql_num_rows($result);
		$row_num = 0;
		//$rows=array();
		while ($row = mysql_fetch_assoc($result)) {
			//$rows[]=$row;
			$row_num++;
			if ($row_num == $total_rows)
				echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null}, 							
								{\"v\":" . $row['kbt'] . ",\"f\":null}]}";
			else
				echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null},
								{\"v\":" . $row['kbt'] . ",\"f\":null}]}, ";
		}
		echo " ] }";
	} elseif ($var=='af') {
		$query = "SELECT kecamatan, fisik FROM hitung_ahp ORDER BY fisik DESC";
		$result = mysql_query($query);
		echo "{ \"cols\": [ {\"id\":\"\",\"label\":\"Kecamatan\",\"pattern\":\"\",\"type\":\"string\"},						
							{\"id\":\"\",\"label\":\"Aspek Fisik\",\"pattern\":\"\",\"type\":\"number\"}						
							], \"rows\": [ ";
		$total_rows = mysql_num_rows($result);
		$row_num = 0;
		//$rows=array();
		while ($row = mysql_fetch_assoc($result)) {
			//$rows[]=$row;
			$row_num++;
			if ($row_num == $total_rows)
				echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null},
								{\"v\":" . $row['fisik'] . ",\"f\":null}]}";
			else
				echo "{\"c\":[{\"v\":\"" . $row['kecamatan'] . "\",\"f\":null},
								{\"v\":" . $row['fisik'] . ",\"f\":null}]}, ";
		}
		echo " ] }";
	} elseif ($var=='se') {
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
	}
?>