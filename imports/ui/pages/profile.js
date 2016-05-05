import './profile.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { BootstrapModalPrompt } from 'meteor/theduke:bootstrap-modal-prompt';

import { EventsLabels } from '../data/events.js';
import { Events } from '/imports/api/events/events';
import { resetCategory } from '/imports/api/events/methods';


let templateName = new ReactiveVar('ProfileStats');
let eventsCategory = new ReactiveVar('cookbook');

Template.profileView.helpers({
  templateName: function()  {
    return templateName.get();
  }
});

Template.ProfileStats.helpers({
  handle: function()  {
    if(Meteor.user()) {
      return Meteor.user().profile.name;
    } else {
      return "";
    }
  },
  email: function()  {
    if(Meteor.user()) {
      return Meteor.user().emails[0].address;
    } else {
      return "";
    }
  }
});

Template.ProfileActionShot.helpers({
  actionShotUrl: function()  {
    return "/images/mystery_man.png";
  }
});

Template.UserProgression.helpers({
  userEvents: function()  {
    const ue = Events.find({ category: eventsCategory.get(), reset: false }).fetch();
    let userEvents = [];
    ue.forEach(function(userEvent, index, cursor) {
      userEvents.push({
        name: (EventsLabels[userEvent.name]) ? EventsLabels[userEvent.name].label : EventsLabels['default_label'].label + userEvent.name,
      });
    });
    return userEvents;
  },
  cookbook: function() {
    return eventsCategory.get() === 'cookbook' ? 'cat-selected': undefined;
  },
  computer: function() {
    return eventsCategory.get() === 'computer' ? 'cat-selected': undefined;
  }
});

Template.UserProgression.events({
  'click #cookbook-cat-btn': function()  {
    eventsCategory.set('cookbook');
  },
  'click #computer-cat-btn': function()  {
    eventsCategory.set('computer');
  },
  'click #reset-cat-btn': function() {
    BootstrapModalPrompt.prompt({
      title: "Reset Events",
      content: 'Do you really want to reset the ' + eventsCategory.get() + ' events?'
    }, function(result) {
      if (result) {
        // Confirmed
        resetCategory.call({
          category: eventsCategory.get(),
          userId: Meteor.userId(),
        }, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log(res);
          }
        });
      }
    });
  }
});
