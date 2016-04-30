import './contact.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import '../../api/contact.js';


Template.contactPage.events({
  'click #sendEmailBtn': function()  {
    const email = {
      to: 'andrew.page32@gmail.com',
      from: 'andrew.page@mancookbookcomputer.com',
      subject: 'Test Template'
    };
    const templateName = 'htmlEmail';
    const templateData = {
      name: "Doug Funny",
      favoriteRestaurant: "Honker Burger",
      bestFriend: "Skeeter Valentine"
    };
    Meteor.call('sendTemplateEmail', email, templateName, templateData);
  },
});

Template.contactForm.helpers({
  contactFormSchema: function() {
    return Schemas.contact;
  }
});

AutoForm.hooks({
  contactForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
      let email = {
        to: 'andrew.page32@gmail.com',
        from: 'andrew.page@mancookbookcomputer.com',
        subject: 'Contact Form email'
      };
      const templateName = 'htmlEmail';
      const templateData = {
        name: insertDoc.name,
        favoriteRestaurant: insertDoc.email,
        bestFriend: insertDoc.message
      };
      Meteor.call('sendTemplateEmail', email, templateName, templateData);
      
      //if (customHandler(insertDoc)) {
      //  this.done();
      //} else {
      //  this.done(new Error("Submission failed"));
      //}
      this.done();
      return false;
    }
  }
});
