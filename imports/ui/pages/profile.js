/* eslint max-len: "off" */
/* eslint-env es6 */

import './profile.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { BootstrapModalPrompt } from 'meteor/theduke:bootstrap-modal-prompt';

import { EventsLabels } from '../data/events.js';
import { Events } from '/imports/api/events/events';
import { resetCategory } from '/imports/api/events/methods';

const templateName = new ReactiveVar('profileStats');
const eventsCategory = new ReactiveVar('cookbook');

Template.profileView.helpers({
  templateName() {
    return templateName.get();
  },
});

Template.profileStats.helpers({
  handle() {
    if (Meteor.user()) {
      return Meteor.user().profile.name;
    }
    return '';
  },
  email() {
    if (Meteor.user()) {
      return Meteor.user().emails[0].address;
    }
    return '';
  },
});

Template.profileActionShot.helpers({
  actionShotUrl() {
    return '/images/mystery_man.png';
  },
});

Template.userProgression.helpers({
  userEvents() {
    const ue = Events.find({ category: eventsCategory.get(), reset: false }).fetch();
    const userEvents = [];
    ue.forEach((userEvent) => {
      userEvents.push({
        name: (EventsLabels[userEvent.name]) ? EventsLabels[userEvent.name].label : EventsLabels.default_label.label + userEvent.name,
      });
    });
    return userEvents;
  },
  cookbook() {
    return eventsCategory.get() === 'cookbook' ? 'cat-selected' : undefined;
  },
  computer() {
    return eventsCategory.get() === 'computer' ? 'cat-selected' : undefined;
  },
});

Template.userProgression.events({
  'click #cookbook-cat-btn': () => {
    eventsCategory.set('cookbook');
  },
  'click #computer-cat-btn': () => {
    eventsCategory.set('computer');
  },
  'click #reset-cat-btn': () => {
    BootstrapModalPrompt.prompt({
      title: 'Reset Events',
      content: `Do you really want to reset the ${eventsCategory.get()} events?`,
    }, (result) => {
      if (result) {
        // Confirmed
        resetCategory.call({
          category: eventsCategory.get(),
          userId: Meteor.userId(),
        }, (err) => {
          if (err) {
            Meteor.call(
              'Logger.client.logglyLog',
              `Problem resetting ${eventsCategory.get()} events for user(${Meteor.userId()}): ${err}`);
          }
          Meteor.call(
            'Logger.client.logglyLog',
            `User(${Meteor.userId()}) reset ${eventsCategory.get()} events.`);
        });
      }
    });
  },
});
