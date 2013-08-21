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

	<div class="container-fluid">
		<div class="row-fluid">
			<h1 class="span12"><?php echo $appName ?></h1>	
		</div>
		<div class="row-fluid">
			<div class="span12"><?php breadcrumb(); ?></div>	
		</div>
		<div class="row-fluid">
			<div class="projects span8">
				<p class="lead">Here are your current projects:</p>
				<ul>
				</ul>
			</div>
		
			<div class="welcome span4">
				<p class="lead">Create a new project</p>
				<input type="text" name="project_name" class="project-name input-medium" />
				<input type="submit" class="btn btn-primary" value="Go!" />
			</div>
		</div>
	</div>
	
    <script src="js/bootstrap.min.js"></script>
</body>
</html>