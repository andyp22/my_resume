import './analytics.html';

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';

Template.analytics.onCreated(function () {
  var self = this;
  self.currentIdentity = new ReactiveVar(analytics._user._getTraits().email || 'No Identity Set');
  self.log = new ReactiveVar([]);
  analytics.on('page', function(event, properties, options){
    var latest = self.log.get();
    latest.push("Page: " + options.path);
    self.log.set(latest);
  });
  analytics.on('identify', function(event, properties, options){
    var latest = self.log.get();
    latest.push("Identify: " + properties.email);
    self.log.set(latest);
    self.currentIdentity.set(properties.email);
  });
  analytics.on('track', function(event, properties, options){
    var latest = self.log.get();
    latest.push("Track: " + event);
    self.log.set(latest);
  });
});

Template.analytics.helpers({
  log: function() { return Template.instance().log.get(); },
  currentIdentity: function() { return Template.instance().currentIdentity.get(); }
});
