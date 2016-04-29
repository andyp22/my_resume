import './contact.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';


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
