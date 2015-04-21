/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    cssstats: {
      dev: {
        options: {},
        files: {
          'stats/css-stats.json': ['css/example.css'],
        },
      }
    },

    devperf: {
      options: {
        urls: [
          'http://fluentconf.com/javascript-html-2015/public/schedule/grid/public'
        ],
        numberOfRuns: 5,
        openResults: true,
        resultsFolder: './devperf',
        phantomasOptions: {
          'film-strip': true
        }
      }
    },

    perfbudget: {
      default: {
        options: {
          url: 'http://fromthemiddle.io/',
          key: 'THISISMYKEY',
          wptInstance: 'ec2.us-west-2.amazonaws.com',
          location: 'us-west-2_wptdriver',
          pollResults: 10,
          connectivity: '3G',
          runs: 1,
          timeout: 240,
          budget: {
            render: '3000',
            SpeedIndex: '7500'
          }
        }
      }
    },

    wpt: {
      options: {
        url: 'http://fromthemiddle.io/',
        locations: ['us-west-2_wptdriver'],
        key: 'THISISMYKEY',
        server: 'ec2.us-west-2.amazonaws.com',
        timeout: 240,
        dest: 'wpt-track/',
      },
      ftm: {
        options: {
          server: 'http://ec2.us-west-2.amazonaws.com',
          url: [ 'http://fromthemiddle.io/' ],
          key: 'THISISMYKEY',
       },
       dest: 'wpt-track/',
      }
    }
  });

  // Load Plugins.
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Default task that is run when no arguments are passed.
  grunt.registerTask('default', ['perfbudget']);

  // Specific tasks
  grunt.registerTask('pe', ['devperf']);
  grunt.registerTask('stats', ['cssstats']);
  grunt.registerTask('budg', ['perfbudget']);
  grunt.registerTask('wptrun', ['wpt']);
};
