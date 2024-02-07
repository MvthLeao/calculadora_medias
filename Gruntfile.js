module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'main.min.js': 'main.js'
                }
            }
        }
    })

    grunt.registerTask('pratique', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('praticado com sucesso!');
            done();
        })
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['less', 'uglify']);

}