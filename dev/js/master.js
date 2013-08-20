$(function() {

	/* ********************* */
	/* CREATE PROJECT FOLDER */
	/* ********************* */
	
	function create_proj() {
		$(document).on('click', '.welcome .btn', function() {
			// disable the button
			$(this).attr('disabled', 'disabled').text('. . .');
			// get the name of the new project
			var project_name = $('.project-name').val();
			// send the info the the PHP and create project directory
			$.ajax({
				url: 'actions/proj_create_dir.php',
				data: {id:project_name},
				success: function(response) {
					$('.welcome .btn').text('Finished').after(response);
					display_proj();
					$('.welcome').children('.text-success').delay(1000).fadeOut(500).end().children('.btn').removeAttr('disabled');
				},
				error: function(error) {
					$('.welcome .btn').html(error);
				}
			}); // end AJAX call
		}); // end click action
	}





	/* ********************* */
	/* READ PROJECT FOLDER */
	/* ********************* */
	
	function display_proj() {
		
		/*
		$('.projects ul').ajaxStart(function() {
			$(this).addClass('loading');
		});
		*/
	
		$.get('actions/proj_list_dir.php', function(data) {
			$('.projects ul').html(data);
			//console.log(data)
		});
		
		/*
		$('.projects ul').ajaxStop(function() {
			$(this).removeClass('loading');
		});
		*/
	}





	/* ********************* */
	/* DELETE PROJECT FOLDER */
	/* ********************* */
	
		$(document).on('mouseenter', 'li', function() {
			$(this).children('.btn').addClass('show');
		});
		$(document).on('mouseleave', 'li', function() {
			$(this).children('.btn').removeClass('show');
		});
		/*
		$(document).on('click','.projects .btn', function() {

			$(this).ajaxStart(function() {
				$(this).text('').addClass('loading');
			});

			var proj_name = $(this).siblings('.dir').text();
			console.log(proj_name);
			$.ajax({
				url: 'actions/proj_delete_dir.php',
				data: {id:proj_name},
				success: function(response) {
					console.log(response);
					display_proj();
				}
			}); // end AJAX call

			$(this).ajaxStop(function() {
				$(this).removeClass('loading');
			});
	
		});
		*/
		





	/* **************** */
	/* CHECK FOR COOKIE */
	/* **************** */
	// this happens on page load
	if( $.cookie('LOG') ) {
	
		// if cookie found
		$('.welcome').text('Welcome back!');
		return; // break out of this
	
	} else {
		
		var welcome = '<span>Welcome, let\'s begin by creating your first project</span>';
		
		// if cookie not found
		$('.welcome').addClass('newbie');//.html(welcome);
		create_proj();
		display_proj();

		// create the cookie
		//$.cookie('LOG', 'logged', { expires: 1000 });
		return; // break out of this
	}
	


});