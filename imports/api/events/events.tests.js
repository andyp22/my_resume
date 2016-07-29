import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Factory } from 'meteor/dburles:factory';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { chai, assert } from 'meteor/practicalmeteor:chai';
//import { _ } from 'meteor/underscore';
//import { DDP } from 'meteor/ddp-client';

import { Events } from './events.js';
import { insertEvent } from './methods.js';

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
      let userId;
      const userName = 'John Buck';
      
      beforeEach(function () {
        Events.remove({});
        
        // Generate a 'user'
        userId = Random.id();
        
        const name = 'Event Name';
        // create 3 global events
        //_.times(1, () => createDefaultEvent(`${name} ${Random.id()}`, userId));
        // create 3 cookbook events
        //_.times(3, () => createEvent(`${name} ${Random.id()}`, userId, 'cookbook'));
        // create 3 computer events
        //_.times(2, () => createEvent(`${name} ${Random.id()}`, userId, 'computer'));
        
      });
      
      describe('insertEvent', function () {
        it('inserts a new event', function () {
          const methodInvocation = { userId };
          const args = { name: userName, userId };

          // Works fine
          insertEvent._execute(methodInvocation, args);

          assert.equal(Events.findOne({ userId }).userId, userId);
          assert.equal(Events.findOne({ userId }).userId, userId);
          assert.equal(Events.find({ userId }).count(), 1);
        });
      });
      
    }); // END methods

  }); // END events
}