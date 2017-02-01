/* eslint new-cap: ["error", { "capIsNewExceptions": ["Rellax"] }] */
/* eslint-env es6 */

import './cookbook.html';
import '../components/viewportSize.js';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { insertEvent } from '/imports/api/events/methods';
import { cookbookData } from '/imports/ui/data/cookbook.js';

const Rellax = require('../../vendor/rellax.js').init();
const COOKBOOK_CATEGORY = 'cookbook';

Template.rellax.helpers({
  rellaxSections() {
    return cookbookData;
  },
});

Template.rellax.onRendered(() => {
  Rellax('.rellax');
});

Template.cookbookPage.onRendered(() => {
  insertEvent.call({
    name: 'savory_pie_dough',
    userId: Meteor.userId(),
    category: COOKBOOK_CATEGORY,
  }, (err) => {
    if (err) {
      Meteor.call(
        'Logger.client.logglyLog',
        `Problem inserting \'savory_pie_dough\' event: ${err}`);
    }
  });

  $('body').addClass('hide-scroll-x');
});

Template.cookbookPage.onDestroyed(() => {
  $('body').removeClass('hide-scroll-x');
});
