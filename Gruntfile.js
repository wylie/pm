module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		php: {
			test: {
				options: {
					port: 7007,
					hostname: 'localhost',
					keepalive: true,
					open: true
				}
			}
		},
		less: {
			development: {
				files: {
					"app/css/master.css": "dev/less/master.less"
				}
			}
		},
		watch: {
			less: {
    			files: 'less/*',
    			tasks: ['less']
			}
		}
	});

	grunt.loadNpmTasks("grunt-php");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("compile", [
		"less"
	]);

	grunt.registerTask("test", [
		"php",
		"watch"
	]);
	
};