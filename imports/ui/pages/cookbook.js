import './cookbook.html';
import '../data/cookbook.js';
import '../components/viewportSize.js';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';
import { insertEvent } from '/imports/api/events/methods';

const Rellax = require('../../vendor/rellax.js').init();
const COOKBOOK_CATEGORY = 'cookbook';

Template.rellax.helpers({
  rellaxSections: function()  {
    return cookbookData;
  }
});

Template.rellax.onRendered(function() {
  Rellax('.rellax');
});

Template.cookbookPage.onRendered(function() {
  insertEvent.call({
      name: 'savory_pie_dough',
      userId: Meteor.userId(),
      category: COOKBOOK_CATEGORY,
    }, (err, res) => {
      if (err) {
        Meteor.call('Logger.client.logglyLog', 'Problem inserting "savory_pie_dough" event: ' + err);
      }
    });
});
