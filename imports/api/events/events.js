import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Events = new Mongo.Collection('Events');

// Deny all client-side updates since we will be using methods to manage this collection
Events.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

/*
 * Stores Schemas
 */
Events.schema = new SimpleSchema({
  name: { type: String, denyUpdate: true }, // Event name, machine readable
  userId: { type: String, denyUpdate: true }, // User Id which triggered the event
  category: { // Event category
    type: String,
    defaultValue: 'global',
    denyUpdate: true,
    optional: true,
  },
  reset: { type: Boolean, defaultValue: false, optional: true },  // Has this event been reset?
  createdAt: { // When this event was triggered
    type: Date,
    defaultValue: new Date(),
    denyUpdate: true,
    optional: true,
  },
  resetAt: { type: Date, denyInsert: true, optional: true },  // When this event was reset
});

Events.publicFields = {
  name: 1,
  category: 1,
  reset: 1,
};

Events.attachSchema(Events.schema);

Factory.define('event', Events, {});

Events.helpers({
  editableBy(userId) {
    if (!this.userId) {
      return false;
    }
    return this.userId === userId;
  },
});
