import './cookbook.html';
import '../data/cookbook.js';
import '../components/viewportSize.js';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';

const Rellax = require('../../vendor/rellax.js').init();

import { insertEvent } from '/imports/api/events/methods';
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
        //Meteor.call('logglyLog', 'Problem inserting "spider_eye_clicked" event: ' + err);
        console.log(err);
      }
    });
});
