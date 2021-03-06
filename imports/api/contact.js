import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const ContactSchemas = {};
ContactSchemas.contact = new SimpleSchema({
  name: {
    type: String,
    label: 'Your name',
    max: 50,
  },
  from: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'E-mail address',
  },
  subject: {
    type: String,
    max: 100,
    label: 'Subject',
  },
  text: {
    type: String,
    label: 'Message',
    max: 1000,
  },
});

ContactSchemas.email = new SimpleSchema({
  name: {
    type: String,
    max: 50,
  },
  to: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  from: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  cc: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: true,
  },
  bcc: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: true,
  },
  replyTo: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: true,
  },
  subject: {
    type: String,
    max: 100,
  },
  signature: {
    type: String,
    max: 100,
    optional: true,
  },
  text: {
    type: String,
    max: 1000,
    optional: true,
  },
  html: {
    type: String,
    optional: true,
  },
});
