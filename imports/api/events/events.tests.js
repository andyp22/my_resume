import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Factory } from 'meteor/dburles:factory';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { chai, assert } from 'meteor/practicalmeteor:chai';
//import { _ } from 'meteor/underscore';
//import { DDP } from 'meteor/ddp-client';

import { Events } from './events.js';
import {
  insertEvent,
  resetEventsList,
  resetEvent,
} from './methods.js';

if (Meteor.isServer) {
  import './server/publications.js';

  describe('events', function () {
    const createDefaultEvent = (name, userId) => {
      Factory.create('event', { name, userId });
    };
    
    const createEvent = (name, userId, category) => {
      Factory.create('event', { name, userId, category });
    };
    
    describe('mutators', function () {
      const userId = Random.id();
      it('builds correctly from factory', function () {
        const event = Factory.create('event', { name: 'John Buck', userId });
        assert.isObject(event);
        assert.equal(event.name, 'John Buck');
        assert.equal(event.userId, userId);
        assert.equal(event.category, 'global');
        assert.equal(event.reset, false);
        assert.isBoolean(event.reset);
        assert.instanceOf(event.createdAt, Date);
        assert.isUndefined(event.resetAt);
      });
    }); // END mutators
    
    describe('helpers', function () {
      const uid = Random.id();
      before(function () {
        Events.remove({});

        // create a global event 
        _.times(1, () => createDefaultEvent('Event Name', uid));
        // create some computer events
        _.times(4, () => createEvent('Event Name ${Random.id()}', uid, 'computer'));
      });
      
      describe('editableBy', function () {
        it('has a successful check', function () {
          const userEvents = Events.find({ name: 'Event Name', userId: uid, reset: false });
          let editableBy = false;
          userEvents.forEach((userEvent) => {
            editableBy = userEvent.editableBy(uid);
          });
          assert.equal(editableBy, true);
        });
        
        it('has a failing check', function () {
          const userEvents = Events.find({ name: 'Event Name', userId: uid, reset: false });
          let editableBy = true;
          userEvents.forEach((userEvent) => {
            editableBy = userEvent.editableBy(Random.id());
          });
          assert.equal(editableBy, false);
        });
      });
      
      describe('resetEventsList', function () {
        it('resets all events in the list', function () {
          let userEvents = Events.find({ userId: uid, category: 'computer', reset: false });
          let updatedEvents = resetEventsList(userEvents);
          assert.equal(updatedEvents.ids.length, 4);
          
          createEvent('Event Name ${Random.id()}', uid, 'computer');
          userEvents = Events.find({ userId: uid, category: 'computer', reset: false });
          updatedEvents = resetEventsList(userEvents);
          assert.equal(updatedEvents.ids.length, 1);
        });
      });
      
    }); // END mutators

    describe('publications', function () {
      const userId = Random.id();
    
      before(function () {
        Events.remove({});
        const name = 'Event Name';
        // create 3 global events
        _.times(1, () => createDefaultEvent(`${name} ${Random.id()}`, userId));
        // create 3 cookbook events
        _.times(3, () => createEvent(`${name} ${Random.id()}`, userId, 'cookbook'));
        // create 3 computer events
        _.times(2, () => createEvent(`${name} ${Random.id()}`, userId, 'computer'));
      });
    
      describe('events.category', function () {
        it('sends all events in the default category for a user which have not been reset', function (done) {
          const collector = new PublicationCollector({ userId });
          collector.collect('events.category', (collections) => {
            chai.assert.equal(collections.Events.length, 1);
            done();
          });
        });
        
        it('sends all events in the cookbook category for a user which have not been reset', function (done) {
          const collector = new PublicationCollector({ userId });
          collector.collect('events.category', 'cookbook', (collections) => {
            chai.assert.equal(collections.Events.length, 3);
            done();
          });
        });
        
        it('sends all events in the computer category for a user which have not been reset', function (done) {
          const collector = new PublicationCollector({ userId });
          collector.collect('events.category', 'computer', (collections) => {
            chai.assert.equal(collections.Events.length, 2);
            done();
          });
        });
      });
      
      describe('events.user', function () {
        it('sends all events for the user', function (done) {
          const collector = new PublicationCollector({ userId });
          collector.collect('events.user', (collections) => {
            chai.assert.equal(collections.Events.length, 6);
            done();
          });
        });
      });
    
    }); // END publications
    
    describe('methods', function () {
      const userId = Random.id();
      const eventName = 'Event Name';
      
      beforeEach(function () {
        Events.remove({});
        
        // create a global event 
        _.times(1, () => createDefaultEvent(eventName, userId));
        // create some computer events
        _.times(4, () => createEvent(`${eventName} ${Random.id()}`, userId, 'computer'));
        
      });
      
      describe('insertEvent', function () {
        it('inserts a new event', function () {
          const uid = Random.id();
          const methodInvocation = { userId: uid };
          const args = { name: eventName, userId: uid };

          insertEvent._execute(methodInvocation, args);

          const event = Events.findOne({ userId: uid });
          assert.equal(event.userId, uid);
          assert.equal(event.category, 'global');
          assert.equal(Events.find({ userId: uid }).count(), 1);
        });
      });
      
      describe('resetEvent', function () {
        it('resets all events with the specified name', function () {
          const methodInvocation = { userId };
          const args = { name: eventName, userId };
          
          resetEvent._execute(methodInvocation, args);
          assert.equal(Events.find({ name: eventName, userId, reset: false }).count(), 0);
          assert.equal(Events.find({ name: eventName, userId, reset: true }).count(), 1);
        });
      });
      
    }); // END methods

  }); // END events
}