<?php
	
	//define('DOCUMENT_ROOT', dirname(realpath(__FILE__)).'../');
	
	$appName = 'Bananas';
	
	function breadcrumb() {
		
		//echo 'Dashboard' . getcwd();
		echo 'Dashboard / ' . basename(getcwd());
		
	}

?>