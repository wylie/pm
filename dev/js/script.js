$(function() {

	// write the project name
	$.getJSON("../site.json", function(data) {
		var name = data.name;
		$('title').text(name);
	});

});