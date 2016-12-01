module.exports = {
	dynamic: {
		options: {
			optimizationLevel: 7,
			svgoPlugins: [{ removeViewBox: true }],
		},
		files: [{
			expand: true,
			cwd: '_src/images/',
			src: ['**/*.{png,jpg,gif,svg}'],
			dest: '_dist/_static/imgs/'
		}]
	}
}