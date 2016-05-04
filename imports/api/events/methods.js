import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { Roles } from 'meteor/alanning:roles';

import { Events } from './events.js';

const NAME_AND_USERID_ONLY = new SimpleSchema({
  name: { type: String },
  userId: { type: String },
}).validator();

export const insert = new ValidatedMethod({
  name: 'Events.methods.insert',
  validate: Events.schema.validator(),
  run(newEvent) {
    return Events.insert(newEvent);
  },
});

export const resetEvent = new ValidatedMethod({
  name: 'Events.methods.updateReset',
  validate: NAME_AND_USERID_ONLY,
  run({ name, userId }) {
    const userEvents = Events.find({ name: name, userId: userId, reset: false });
    let updatedEvents = { ids: [] };
    if(userEvents.count() > 0)  {
      userEvents.forEach(function(userEvent, index, cursor) {
        if(userEvent.editableBy(userId) || Roles.userIsInRole(this.userId, ['admin'], Roles.GLOBAL_GROUP))  {
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
  },
});

export const removeEvent = new ValidatedMethod({
  name: 'Events.methods.removeEvent',
  validate: NAME_AND_USERID_ONLY,
  run({ name, userId }) {
    if (Roles.userIsInRole(this.userId, ['admin'], Roles.GLOBAL_GROUP)) {
      const userEvents = Events.find({ name: name, userId: userId });
      let removedEvents = { ids: [] };
      userEvents.forEach(function(userEvent, index, cursor) {
        Events.remove(userEvent._id);
        removedEvents.ids.push(userEvent._id);
      });
      return removedEvents;
    } else {
      throw new Meteor.Error('Events.methods.remove', 'You do not have permission to remove events.');
    }
  },
});

// Get list of all method names on Lists
const EVENTS_METHODS = _.pluck([
  insert,
  resetEvent,
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