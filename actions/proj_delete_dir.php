<?php

	$proj_name = $_GET['id'];
	
	// change the directory
	chdir('../projects');
	
	$dir = "../projects/";

	//system('/bin/rm -rf ' . escapeshellarg($dir . $proj_name));	
	
	
	/*
	$proj_list = scandir('../projects/' . $proj_name);
	
	//rmdir($proj_name);
	
	echo print_r($proj_list);
	*/

?>