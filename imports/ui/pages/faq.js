import './faq.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { FAQs } from '../data/faq.js';

Template.faqPage.helpers({
  faqs: function() {
    return FAQs;
  }
});
