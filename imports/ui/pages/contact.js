/* eslint no-unused-vars: "off" */
/* eslint max-len: "off" */
/* eslint-env es6 */

import './contact.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { AutoForm } from 'meteor/aldeed:autoform';
import typed from 'typed.js';

import { ContactSchemas } from '/imports/api/contact.js';

const contactFormTemplateName = new ReactiveVar('contactForm');

Template.contactPage.helpers({
  contactFormTemplate() {
    return contactFormTemplateName.get();
  },
});

Template.contactForm.helpers({
  contactFormSchema() {
    return ContactSchemas.contact;
  },
});

Template.contactFormSent.onDestroyed(() => {
  contactFormTemplateName.set('contactForm');
});

Template.contactFormSent.onRendered(() => {
  $('#contactFormSent').typed({
    strings: ['Your email has been sent. ^300 <br/><br/>Thank you.'],
    contentType: 'html',
    showCursor: false,
  });
});

Template.contactPage.onRendered(() => {
  $('body').addClass('hide-scroll-x');
});

Template.contactPage.onDestroyed(() => {
  $('body').removeClass('hide-scroll-x');
});

AutoForm.hooks({
  contactForm: {
    onSubmit(insertDoc) {
      const contactEmail = Object.assign({}, insertDoc);
      contactEmail.to = 'andrew.page@mancookbookcomputer.com';
      contactEmail.text = `From: ${contactEmail.name} <${contactEmail.from}> -- ${contactEmail.text}`; 
      Meteor.call('sendEmail', contactEmail);

      const thankYouEmail = Object.assign({}, insertDoc);
      thankYouEmail.to = thankYouEmail.from;
      thankYouEmail.from = 'no-reply@mancookbookcomputer.com';
      thankYouEmail.subject = 'Thank you for contacting me';
      thankYouEmail.text = 'Thank you for taking the time to drop me a line. I will get back to you as soon as I can.';
      thankYouEmail.signature = 'Andrew Page';

      Meteor.call('sendTemplateEmail', thankYouEmail, 'thankyouEmail');

      this.done();
      return false;
    },
    onSuccess() {
      contactFormTemplateName.set('contactFormSent');
    },
  },
});
