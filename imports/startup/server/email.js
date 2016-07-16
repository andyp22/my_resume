/* global Assets:true */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-env es6 */

import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check } from 'meteor/check';
import { SSR } from 'meteor/meteorhacks:ssr';
import { logglyLog } from '/imports/api/logger/methods';

import { ContactSchemas } from '/imports/api/contact.js';

function getEmailSetting(emailSetting) {
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

Meteor.startup(() => {
  const smtpUser = encodeURIComponent(getEmailSetting('smtp_user'));
  const smtpPassword = encodeURIComponent(getEmailSetting('smtp_password'));
  const smtpHost = getEmailSetting('smtp_host');
  const smtpPort = getEmailSetting('smtp_port');

  // Should only really need this for local testing.
  if (smtpUser !== '' && smtpPassword !== '' && smtpHost !== '' && smtpPort !== '') {
    process.env.MAIL_URL = `smtp://${smtpUser}:${smtpPassword}@${smtpHost}:${smtpPort}`;
  }

  // Email Templates
  const emailDirectory = 'email/';
  SSR.compileTemplate('thankyouEmail', Assets.getText(`${emailDirectory}thankyou-email.html`));
});

function sendEmailMethod(email) {
  check(email, ContactSchemas.email);
  if (email.text && email.html) {
    logglyLog.call({ message: 'An email cannot have both text and html.' });
    throw new Meteor.Error('email-misformed', 'An email cannot have both text and html.');
  } else {
    logglyLog.call({ message: `Email sent: ${JSON.stringify(email)}` });
    Email.send(email);
    return 'Email sent';
  }
}

Meteor.methods({
  sendEmail: sendEmailMethod,
  sendTemplateEmail(email, templateName) {
    check(email, ContactSchemas.email);
    check(templateName, String);
    email.html = SSR.render(templateName, email);
    delete email.text;
    return sendEmailMethod(email);
  },
});
