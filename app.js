'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var meanCompass = new Module('meanCompass');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
meanCompass.register(function(app, auth, database) {
  return meanCompass;
});
