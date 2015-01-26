// conf.js
exports.config = {
  specs: ['spec.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }
  ],

  //  // Options to be passed to Jasmine-node.
  // onPrepare: function() {
  //   require('jasmine-reporters');
  //   jasmine.getEnv().addReporter(
  //     new jasmine.JUnitXmlReporter(null, true, true, 'junit')
  //   );
  //},
};