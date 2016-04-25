import './computer.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

Session.setDefault('session-nick', '');

if (Session.equals('session-nick', '')) {
  Session.set('session-nick', Random.id());
}

function callingChatbotCallback(err, res) {
  if (err) {
    console.log(err);
  } else {
    if(!res) {
      console.log("Chat session already started.");
    } else {
      console.log(err, res);
    }
  }
}

function askingChatbotCallback(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
}

function onCallButtonClicked(evt, tpl) {
  evt.preventDefault();
  
  Meteor.call('askingChatbot', 'Is there anybody out there?', askingChatbotCallback);
  
}

Template.computerPage.events({
  'click #callButton': onCallButtonClicked,
});

function onComputerPageRendered() {
  Meteor.call('callingChatbot', Session.get('session-nick'), callingChatbotCallback);
}

Template.computerPage.onRendered(onComputerPageRendered);
