import { $ } from 'meteor/jquery';
import { Router } from 'meteor/iron:router';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/layouts/app-header.js';
import '../../ui/pages/home.js';
import '../../ui/pages/man.js';
import '../../ui/pages/cookbook.js';
import '../../ui/pages/computer.js';
import '../../ui/pages/contact.js';

/*
 * Router settings for the iron:router package.
 */
Router.configure({
  layoutTemplate: 'ApplicationLayout',
});

Router.onRun(function () {
  $('#content').addClass('fadeIn').removeClass("hidden");
  this.next();
});

Router.onStop(function () {
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
});

Router.route('computer', {
  name: 'computer',
  path: '/computer',
  template: 'computerPage',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
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
});
