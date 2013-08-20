module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			development: {
				files: {
					"app/css/master.css": "dev/less/master.less"
				}
			}
		},
		watch: {
			css: {
				files: ['dev/less/*'],
				tasks: ['less']
			}
		},

		express: {
			server: {
				options: {
					port: 9000,
					bases: "site"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask("compile", [
		"less",
		"watch"
	]);
	grunt.registerTask("server", [
		"express",
		"express-keepalive"
	]);
};