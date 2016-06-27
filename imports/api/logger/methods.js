import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { check } from 'meteor/check';

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
  'Logger.client.logglyLog': (message) => {
    check(message, String);
    Logger.logglyLog(message);
  },
});
