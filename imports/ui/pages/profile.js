import './profile.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

Session.setDefault('', );

let templateName = new ReactiveVar('ProfileStats');

Template.profileView.helpers({
  templateName: function()  {
    return templateName.get();
  }
});

Template.ProfileStats.helpers({
  handle: function()  {
    return Meteor.user().profile.name;
  },
  email: function()  {
    return Meteor.user().emails[0].address;
  }
});

Template.ProfileActionShot.helpers({
  actionShotUrl: function()  {
    return "/images/mystery_man.png";
  }
});

Template.UserProgression.helpers({
  profile: function()  {
    return Meteor.user().profile;
  }
});
