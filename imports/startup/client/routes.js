/* eslint func-names: "off" */
/* eslint-env es6 */

import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';
import { Router } from 'meteor/iron:router';
import { cookbookData } from '/imports/ui/data/cookbook.js';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/layouts/app-header.js';
import '../../ui/layouts/app-footer.js';
import '../../ui/pages/home.js';
import '../../ui/pages/man.js';
import '../../ui/pages/cookbook.js';
import '../../ui/pages/computer.js';
import '../../ui/pages/contact.js';
import '../../ui/pages/profile.js';
import '../../ui/pages/faq.js';

/*
 * Router settings for the iron:router package.
 */
Router.configure({
  layoutTemplate: 'ApplicationLayout',
});

Router.onRun(function () {
  $('#content').addClass('fadeIn').removeClass('hidden');
  this.next();
});

Router.onStop(() => {
  $('#content').removeClass('fadeIn').addClass('hidden');
  $('body').removeClass('hide-scroll');
});

Router.route('home', {
  name: 'home',
  path: '/',
  template: 'homePage',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
});

Router.route('man', {
  name: 'man',
  path: '/man',
  template: 'manPage',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
});

Router.route('cookbook', {
  name: 'cookbook',
  path: '/cookbook',
  template: 'cookbookPage',
  data: {
    sections: cookbookData.sections,
  },
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
  subscriptions: Meteor.subscribe('events.category', 'cookbook'),
});

Router.route('computer', {
  name: 'computer',
  path: '/computer',
  template: 'computerPage',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
  subscriptions: Meteor.subscribe('events.category', 'computer'),
});

Router.route('contact', {
  name: 'contact',
  path: '/contact',
  template: 'contactPage',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
});

Router.route('profile', {
  name: 'profile',
  path: '/profile',
  template: 'profilePage',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
  onBeforeAction() {
    if (!Meteor.userId()) {
      Router.go('home');
    }
    this.next();
  },
  onRerun() {
    if (!Meteor.userId()) {
      Router.go('home');
    }
    this.next();
  },
  data: {
    user: Meteor.user(),
  },
  subscriptions: Meteor.subscribe('events.user'),
});

Router.route('faq', {
  name: 'faq',
  path: '/faq',
  template: 'faqPage',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
});
