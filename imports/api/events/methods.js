import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { Roles } from 'meteor/alanning:roles';
import { _ } from 'meteor/underscore';

import { Events } from './events.js';

const NAME_USERID_AND_CAT = new SimpleSchema({
  name: { type: String },
  userId: { type: String },
  category: { type: String, optional: true, defaultValue: 'global' },
}).validator();

const USERID_AND_CAT_ONLY = new SimpleSchema({
  userId: { type: String },
  category: { type: String },
}).validator();

export const insertEvent = new ValidatedMethod({
  name: 'Events.methods.insert',
  validate: Events.schema.validator(),
  run({ name, userId, category }) {
    const ue = Events.findOne({ name, userId, reset: false });
    if (!ue) {
      return Events.insert({ name, userId, category });
    }
    return 'An event by this name already exists.';
  },
});

function resetEventsList(userEvents) {
  const updatedEvents = { ids: [] };
  if (userEvents.count() > 0) {
    const userId = this.userId;
    userEvents.forEach((userEvent) => {
      if (userEvent.editableBy(userEvent.userId) ||
        Roles.userIsInRole(userId, ['admin'], Roles.GLOBAL_GROUP)) {
        Events.update(userEvent._id, {
          $set: { reset: true, resetAt: new Date() },
        });
        updatedEvents.ids.push(userEvent._id);
      } else {
        throw new Meteor.Error('Events.methods.updateReset',
          'Cannot update the last event.');
      }
    });
  }
  return updatedEvents;
}

export const resetEvent = new ValidatedMethod({
  name: 'Events.methods.updateReset',
  validate: NAME_USERID_AND_CAT,
  run({ name, userId }) {
    const userEvents = Events.find({ name, userId, reset: false });
    return resetEventsList(userEvents);
  },
});

export const resetCategory = new ValidatedMethod({
  name: 'Events.methods.resetCategory',
  validate: USERID_AND_CAT_ONLY,
  run({ userId, category }) {
    const userEvents = Events.find({ userId, category, reset: false });
    return resetEventsList(userEvents);
  },
});

export const removeEvent = new ValidatedMethod({
  name: 'Events.methods.removeEvent',
  validate: NAME_USERID_AND_CAT,
  run({ name, userId }) {
    if (Roles.userIsInRole(this.userId, ['admin'], Roles.GLOBAL_GROUP)) {
      const userEvents = Events.find({ name, userId });
      const removedEvents = { ids: [] };
      userEvents.forEach((userEvent) => {
        Events.remove(userEvent._id);
        removedEvents.ids.push(userEvent._id);
      });
      return removedEvents;
    }
    throw new Meteor.Error(
      'Events.methods.remove',
      'You do not have permission to remove events.');
  },
});

// Get list of all method names on Lists
const EVENTS_METHODS = _.pluck([
  insertEvent,
  resetEvent,
  resetCategory,
  removeEvent,
], 'name');

if (Meteor.isServer) {
  // Only allow 5 list operations per connection per second
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(EVENTS_METHODS, name);
    },

    // Rate limit per connection ID
    connectionId() { return true; },
  }, 5, 1000);
}
