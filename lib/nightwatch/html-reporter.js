var HtmlReporter = require('nightwatch-html-reporter');
/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: './reports/',
  reportFilename: 'report.html',
  uniqueFilename: false,
  relativeScreenshots: true,
  themeName: 'default'
});

module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};
