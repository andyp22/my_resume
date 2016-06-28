import './faq.html';

import { Template } from 'meteor/templating';
import { FAQs } from '../data/faq.js';

Template.faqPage.helpers({
  faqs() {
    return FAQs;
  },
});
