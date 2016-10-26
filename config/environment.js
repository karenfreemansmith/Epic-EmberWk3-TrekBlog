/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'trek-blog',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
		firebase: {
			apiKey: 'AIzaSyAQX6rnEob29KIV8xGF_b1kuer0sZE6JYg',
			authDomain: 'trek-blog.firebaseapp.com',
			databaseURL: 'https://trek-blog.firebaseio.com',
			storageBucket: 'trek-blog.appspot.com',
		},
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },tinyMCE:{
      load: false
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
