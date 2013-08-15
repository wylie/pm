<?php

	$proj_name = $_GET['id'];
	
	// change the directory
	chdir('../projects');
	
	// create the projects directory
	mkdir($proj_name, 0700);

	// grab the project index template, move and rename it
	$file = '../templates/proj_index.php';
	$newFileName = '../projects/' . $proj_name . '/index.php';
	copy($file, $newFileName);
	
	echo '<p class="text-success">Success, your local database has been created!</p>';
	
?>