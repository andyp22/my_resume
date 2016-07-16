import { Meteor } from 'meteor/meteor';

const Logger = require('./logger.js');

let loggingConfig = {
  env: 'dev',
  instance: 1,
  isDev: true,
  isTrace: true,
};

// Grab the configs from the settings if they exist. Usually only for live environments.
if (Meteor.settings) {
  if (Meteor.settings.private) {
    if (Meteor.settings.private.loggly) {
      loggingConfig = Object.assign(loggingConfig, Meteor.settings.private.loggly);
    }
  }
}
Logger.init(loggingConfig);
Logger.logglyLog('Starting up application');
