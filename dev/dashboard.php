<?php
	require('master.php');
?>
<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="utf-8" />
	<title><?php echo $appName ?></title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link rel="stylesheet" href="css/bootstrap.min.css" />
	<link rel="stylesheet" href="css/master.css" />
	
	<script src="js/jquery-1.8.2.js"></script>
	<script src="js/master.js"></script>
	<script src="js/jquery.cookie.js"></script>
	
</head>
<body>

	<div class="row-fluid">
		<div class="projects span6">
			Here are your current projects:
			<ul>
			</ul>
		</div>
	
		<div class="welcome span4">
			Create a new project<br/><br/>
			<input type="text" name="project_name" class="project_name input-medium" />
<button class="btn btn-primary">Go!</button>
		</div>
	</div>
	
    <script src="js/bootstrap.min.js"></script>
</body>
</html>