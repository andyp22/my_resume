import { Router } from 'meteor/iron:router';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/layouts/home-body.js';
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

Router.route('home', {
  name: 'home',
  path: '/',
  template: 'home_page',
  layoutTemplate: 'HomePageLayout',
});

Router.route('man', {
  name: 'man',
  path: '/man',
  template: 'man_page',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
});

Router.route('cookbook', {
  name: 'cookbook',
  path: '/cookbook',
  template: 'cookbook_page',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
});

Router.route('computer', {
  name: 'computer',
  path: '/computer',
  template: 'computer_page',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
});

Router.route('contact', {
  name: 'contact',
  path: '/contact',
  template: 'contact_page',
  yieldRegions: {
    ApplicationHeader: { to: 'header' },
    ApplicationFooter: { to: 'footer' },
  },
});
