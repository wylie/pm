<?php

	$dir = "../projects";
	
	$file = scandir($dir);
	
	foreach($file as $proj) {
		if ( $proj != "."  && $proj != ".." ){
			echo '<li>';
			echo '<a href="' . 'projects/' . $proj . '/" class="dir">';
			echo $proj;
			echo '</a><span class="btn btn-mini btn-danger" style="cursor: pointer;">delete</span>';
			echo '</li>';
		}
	}
	
?>