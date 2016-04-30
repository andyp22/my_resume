import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Schemas = {};
Schemas.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    subject: {
        type: String,
        max: 100,
        label: "Subject"
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
});