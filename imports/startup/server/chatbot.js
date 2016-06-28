/* eslint new-cap: ["error", { "newIsCap": false }] */
/* eslint-env es6 */

import { Meteor } from 'meteor/meteor';
import cleverbot from 'cleverbot.io';
import Future from 'fibers/future';

let cbuid = '';
if (Meteor.settings) {
  if (Meteor.settings.private) {
    if (Meteor.settings.private.cleverbot_userid) {
      cbuid = Meteor.settings.private.cleverbot_userid;
    }
  }
}

let cbapi = '';
if (Meteor.settings) {
  if (Meteor.settings.private) {
    if (Meteor.settings.private.cleverbot_api_key) {
      cbapi = Meteor.settings.private.cleverbot_api_key;
    }
  }
}

const bot = new cleverbot(cbuid, cbapi);

function onCallingChatbot(userId) {
  const fut = new Future();
  bot.setNick(userId);
  bot.create((err, session) => {
    if (err) {
      return fut.throw(err);
    }
    return fut.return(session);
  });

  return fut.wait();
}

function onAskingChatbot(message) {
  const fut = new Future();

  bot.ask(message, (err, response) => {
    if (err) {
      return fut.throw(err);
    }
    return fut.return(response);
  });

  return fut.wait();
}

Meteor.methods({
  callingChatbot: onCallingChatbot,
  askingChatbot: onAskingChatbot,
});
