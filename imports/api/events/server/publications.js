/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Events } from '../events.js';

Meteor.publish('events.user', function() {
  if (!this.userId) {
    return this.ready();
  }
  
  return Events.find({
    userId: this.userId,
  }, {
    fields: Events.publicFields,
  });
});

Meteor.publish('events.category', function(category = 'global') {
  check(category, String);
  if (!this.userId) {
    return this.ready();
  }
  
  return Events.find({
    userId: this.userId,
    category: category,
    reset: false,
  }, {
    fields: { name: 1 },
  });
});

