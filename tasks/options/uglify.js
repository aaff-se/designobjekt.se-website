module.exports = {
	build_jq_compat: {
		options: {
			wrap: 'aaAllJSWrap'
		},
		src: '_src/js/build/production.jq-compat.js',
		dest: '_dist/_static/js/production.jq-compat.min.js'
	},
	build_jq_evergreen: {
		options: {
			wrap: 'aaAllJSWrap'
		},
		src: '_src/js/build/production.jq-evergreen.js',
		dest: '_dist/_static/js/production.jq-evergreen.min.js'
	}
}