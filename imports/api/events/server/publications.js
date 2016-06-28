/* eslint func-names: "off" */
/* eslint prefer-arrow-callback: "off" */
/* eslint consistent-return: "off" */
/* eslint-env es6 */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Events } from '../events.js';

Meteor.publish('events.user', function () {
  if (!this.userId) {
    this.stop();
    return;
  }
  return Events.find({
    userId: this.userId,
  }, {
    fields: Events.publicFields,
  });
});

Meteor.publish('events.category', function (category = 'global') {
  check(category, String);
  if (!this.userId) {
    this.stop();
    return;
  }
  return Events.find({
    userId: this.userId,
    category,
    reset: false,
  }, {
    fields: { name: 1 },
  });
});

