import './contact.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';
import typed from 'typed.js';

import '../../api/contact.js';

let contactFormTemplateName = new ReactiveVar('contactForm');

Template.contactPage.helpers({
  contactFormTemplate: function() {
    return contactFormTemplateName.get();
  }
});

Template.contactForm.helpers({
  contactFormSchema: function() {
    return Schemas.contact;
  }
});

Template.contactFormSent.onDestroyed(function() {
  contactFormTemplateName.set('contactForm');
});

Template.contactFormSent.onRendered(function() {
  this.$("#contactFormSent").typed({
    strings: ['Your email has been sent. ^300 <br/><br/>Thank you.'],
    contentType: 'html',
    showCursor: false
  });
});


AutoForm.hooks({
  contactForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
      let contactEmail = Object.assign({}, insertDoc);
      contactEmail.to = 'andrew.page@mancookbookcomputer.com';
      Meteor.call('sendEmail', contactEmail);
      
      let thankYouEmail = Object.assign({}, insertDoc);
      thankYouEmail.to = thankYouEmail.from;
      thankYouEmail.from = 'no-reply@mancookbookcomputer.com';
      thankYouEmail.subject = 'Thank you for contacting me';
      thankYouEmail.text = 'Thank you for taking the time to drop me a line. I will get back to you as soon as I can.';
      thankYouEmail.signature = 'Andrew Page';
      
      Meteor.call('sendTemplateEmail', thankYouEmail, 'thankyouEmail');
      
      this.done();
      return false;
    },
    onSuccess: function(formType, result) {
       contactFormTemplateName.set('contactFormSent');
    }
  }
});
