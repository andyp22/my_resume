import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
const Logger = require('../startup/server/logger.js');
/**
 * Initialize the logger with a config hash
 * @param config
 * @param config.isDev - in the dev environment?
 * @param config.isTrace - should the logger use debug (true) or info(false)
 * @param config.subdomain - Loggly subdomain, defaults to "liveaudit"
 * @param config.instance - Unique number for this app instance
 * @param config.env - environment - dev, test, etc
 * @param config.loggly
 * @param config.loggly.token - Loggly inputToken
 * @param config.loggly.tags
 */
let app_instance = 1;
let environment_name = 'dev';
const hostname = Meteor.absoluteUrl();
let loggingConfig = {
  env: environment_name,
  instance: app_instance,
  isDev: true,
  isTrace: true
};

function logglyLog(message)  {
  const logger = Logger.getInstance();
  check(message, String);
  logger.info(message, {
    hostname: hostname,
    instance: app_instance,
    env: environment_name
  });
}

Meteor.startup( function() {
  // Grab the configs from the settings if they exist. Usually only for live environments.
  if (Meteor.settings) {
    if (Meteor.settings.private) {
      if (Meteor.settings.private.loggly) {
        loggingConfig = Object.assign({}, Meteor.settings.private.loggly);
        app_instance = (loggingConfig.instance) ? loggingConfig.instance: app_instance;
        environment_name = (loggingConfig.env) ? loggingConfig.env: environment_name;
      }
    }
  }
  Logger.init(loggingConfig);
  logglyLog("Starting up application");
});

Meteor.methods({
  logglyLog: logglyLog,
});
