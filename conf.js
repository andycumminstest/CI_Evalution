// conf.js
exports.config = {
  specs: ['spec.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }, {
    browserName: 'internet explorer'
  },
  ],
  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter($CIRCLE_TEST_REPORTS, true, true));
  }
};