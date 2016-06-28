/* global analytics:true */
/* eslint-env es6 */

import './analytics.html';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.analytics.onCreated(() => {
  const self = this;
  self.currentIdentity = new ReactiveVar(analytics._user._getTraits().email || 'No Identity Set');
  self.log = new ReactiveVar([]);
  analytics.on('page', (event, properties, options) => {
    const latest = self.log.get();
    latest.push(`Page: ${options.path}`);
    self.log.set(latest);
  });
  analytics.on('identify', (event, properties) => {
    const latest = self.log.get();
    latest.push(`Identify: ${properties.email}`);
    self.log.set(latest);
    self.currentIdentity.set(properties.email);
  });
  analytics.on('track', (event) => {
    const latest = self.log.get();
    latest.push(`Track: ${event}`);
    self.log.set(latest);
  });
});

Template.analytics.helpers({
  log() { return Template.instance().log.get(); },
  currentIdentity() { return Template.instance().currentIdentity.get(); },
});
