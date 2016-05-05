import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Logger = require('./logger.js');

export const logglyLog = new ValidatedMethod({
  name: 'Logger.methods.logglyLog',
  validate: new SimpleSchema({
    message: { type: String },
  }).validator(),
  run({ message }) {
    Logger.logglyLog(message);
  },
});

Meteor.methods({
  'Logger.client.logglyLog': function(message) {
    Logger.logglyLog(message);
  }
});
