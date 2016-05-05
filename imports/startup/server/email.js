import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check } from 'meteor/check';
import { SSR } from 'meteor/meteorhacks:ssr';
import { logglyLog } from '/imports/api/logger/methods';

import '/imports/api/contact.js';

function getEmailSetting(emailSetting)  {
  let returnVal = '';
  if (Meteor.settings) {
    if (Meteor.settings.private) {
      if (Meteor.settings.private.email) {
        if (Meteor.settings.private.email[emailSetting]) {
          returnVal = Meteor.settings.private.email[emailSetting];
        }
      }
    }
  }
  return returnVal;
}

Meteor.startup( function() {
  const smtp_user = encodeURIComponent(getEmailSetting('smtp_user')),
      smtp_password = encodeURIComponent(getEmailSetting('smtp_password')),
      smtp_host = getEmailSetting('smtp_host'),
      smtp_port = getEmailSetting('smtp_port');
  
  // Should only really need this for local testing.
  if (smtp_user !== '' && smtp_password !== '' && smtp_host !== '' && smtp_port !== '') {
    process.env.MAIL_URL = "smtp://" + smtp_user + ":" + smtp_password + "@" + smtp_host + ":" + smtp_port;
  }
  
  // Email Templates
  const emailDirectory = 'email/';
  SSR.compileTemplate( 'thankyouEmail', Assets.getText(emailDirectory + 'thankyou-email.html'));
});

function sendEmailMethod(email) {
  check(email, Schemas.email);
  if (email.text && email.html) {
    logglyLog.call({ message: 'An email cannot have both text and html.' });
    throw new Meteor.Error("email-misformed", "An email cannot have both text and html.");
  } else {
    logglyLog.call({ message: 'Email sent: ' + JSON.stringify(email) });
    Email.send(email);
    return "Email sent";
  }
}

Meteor.methods({
  sendEmail: sendEmailMethod,
  sendTemplateEmail: function(email, templateName) {
    check(email, Schemas.email);
    check(templateName, String);
    email.html = SSR.render(templateName, email);
    delete email.text;
    return sendEmailMethod(email);
  }
});

