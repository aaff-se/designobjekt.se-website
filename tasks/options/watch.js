module.exports = {
	jsstuff: {
		files: ['_src/js/*.js', '_src/js/components/*.js' ],
		tasks: [
			'jshint', 
			'concat:dist_jq_compat', 
			'uglify:build_jq_compat', 
			'concat:dist_jq_evergreen', 
			'uglify:build_jq_evergreen'
		],
		options: {
			spawn: false
		}
	},
	images: {
		files: ['_src/images/**/*.{png,jpg,gif}'],
		tasks: ['imagemin:dynamic'],
		options: {
		spawn: false
		}
	},
		/*
	svg: {
		files: ['_src/images/svg/*.svg'],
		tasks: ['svg2png:all'],
		options: {
		spawn: false,
		}
	},
		*/
	sass: {
		files: ['_src/css/**/*.scss'],
		tasks: ['compass:build', 'cssmin'],
		options: {
			spawn: false
		}
	},
	copystatic: {
		files: ['_src/static-files/**/*'],
		tasks: ['copy:static'],
		options: {
			spawn: false
		}
	}

}
