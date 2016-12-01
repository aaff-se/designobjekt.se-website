module.exports = {
	// DEVELOPMENT
    static: {
      files: [{
        cwd     : '_src/static-files/',
        src     : ['**/*'], 
        dest    : '_dist/',
        flatten : false,
        expand  : true,
        timestamp: true
      }]
    }
}


