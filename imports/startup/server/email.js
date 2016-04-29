import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

function getEmailSetting(privateSettingKey)  {
  let returnVal = '';
  if (Meteor.settings) {
    if (Meteor.settings.private) {
      if (Meteor.settings.private.email) {
        if (Meteor.settings.private.email[privateSettingKey]) {
          returnVal = Meteor.settings.private.email[privateSettingKey];
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
  
  process.env.MAIL_URL = "smtp://" + smtp_user + ":" + smtp_password + "@" + smtp_host + ":" + smtp_port;
  
  // Email Templates
  const emailDirectory = 'email/';
  SSR.compileTemplate( 'htmlEmail', Assets.getText(emailDirectory + 'html-email.html'));
});

function buildEmailObject(email) {
  let returnObj = {
    to: email.to,
    from: email.from,
    subject: email.subject,
  };
  
  if (email.text) {
    returnObj.text = email.text;
  } else if (email.html) {
    returnObj.html = email.html;
  }
  if (email.cc) {
    returnObj.cc = email.cc;
  }
  if (email.bcc) {
    returnObj.bcc = email.bcc;
  }
  if (email.headers) {
    returnObj.html = email.headers;
  }
  if (email.replyTo) {
    returnObj.html = email.replyTo;
  }
  return returnObj;
}

function sendEmailMethod(email) {
  if (email.text && email.html) {
    throw new Meteor.Error("email-misformed", "An email cannot have both text and html.");
  }
  if (email.to && email.subject && email.from && (email.text || email.html)) {
    Email.send(buildEmailObject(email));
    return "Email sent";
  } else {
    throw new Meteor.Error("email-missing-data", "The email failed to send because it was missing required values.");
  }
}

Meteor.methods({
  sendEmail: sendEmailMethod,
  sendTemplateEmail: function(email, templateName, templateData) {
    email.html = SSR.render(templateName, templateData);
    return sendEmailMethod(email);
  }
});

