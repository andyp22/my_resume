import './cookbook.html';
import '../data/cookbook.js';
import '../components/viewportSize.js';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';

const Rellax = require('../../vendor/rellax.js').init();

Template.rellax.helpers({
  rellaxSections: function()  {
    return cookbookData;
  }
});

Template.rellax.onRendered(function() {
  Rellax('.rellax');
});
