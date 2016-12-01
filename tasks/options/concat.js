module.exports = {
	dist_jq_compat: {
		src: [
			'_src/js/lib/jq/compat/*.js',
			'_src/js/lib/ext/*.js',
			'_src/js/global.js',
			'_src/js/components/*.js',
		],
		dest: '_src/js/build/production.jq-compat.js'
	},
	dist_jq_evergreen: {
		src: [
			'_src/js/lib/jq/evergreen/*.js',
			'_src/js/lib/ext/*.js',
			'_src/js/global.js',
			'_src/js/components/*.js',
		],
		dest: '_src/js/build/production.jq-evergreen.js'
	}
}
