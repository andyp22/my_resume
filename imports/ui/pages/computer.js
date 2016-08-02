/* eslint no-unused-vars: "off" */
/* eslint no-param-reassign: "off" */
/* eslint-env es6 */

import './computer.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { ReactiveVar } from 'meteor/reactive-var';
import { Random } from 'meteor/random';
import { $ } from 'meteor/jquery';
import typed from 'typed.js';
import { insertEvent } from '/imports/api/events/methods';

const COMPUTER_CATEGORY = 'computer';

const sessionNick = new ReactiveVar(Random.id());
let chatbotActive = false;
let intervalId = -1;

function typeMessage(message, classes) {
  if (!classes) {
    classes = 'message';
  }
  $('#chatbotInput').blur();
  $('#chatbot2000').append(`<p class="typed-message ${classes}"></p>`);
  $('.typed-message').typed({
    strings: [message],
    contentType: 'text',
    showCursor: false,
    callback() {
      $('#chatbotInput').focus();
    },
  });
}

function showMessage(message, classes) {
  if (!classes) {
    classes = 'message';
  }
  $('#chatbot2000').append(`<p class="${classes}">${message}</p>`);
}

function setTime() {
  const today = new Date();
  let hours = today.getHours();
  const ampm = (hours > 11 && hours < 24) ? 'PM' : 'AM';
  hours = (hours > 12) ? hours - 12 : hours;
  if (hours === 0) {
    hours = 12;
  }
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  $('.time').html(`${hours}:${minutes} ${ampm}`);
}

function callingChatbotCallback(err) {
  if (err) {
    Meteor.call('Logger.client.logglyLog', `Problem setting up cleverbot: ${err}`);
  }
}

function askingChatbotCallback(err, res) {
  if (!err) {
    $('#chatbot2000').empty();
    typeMessage(res, 'chatbotMessage');
  } else {
    Meteor.call('Logger.client.logglyLog', `Problem communicating with cleverbot: ${err}`);
  }
}

function onMessageChanged(evt, tpl) {
  evt.preventDefault();
  // enter key pressed
  if (evt.keyCode === 13) {
    const $input = tpl.$('#chatbotInput');
    Meteor.call('askingChatbot', $input.val(), askingChatbotCallback);
    showMessage($input.val());
    $input.val('');

    if (Meteor.userId()) {
      insertEvent.call({
        name: 'chatbot2000_conversation',
        userId: Meteor.userId(),
        category: COMPUTER_CATEGORY,
      }, (err) => {
        if (err) {
          Meteor.call(
            'Logger.client.logglyLog',
            `Problem inserting \'chatbot2000_conversation\' event: ${err}`);
        }
      });
    }
  }
}

function showChatbot() {
  Blaze.render(Template.chatbot2000, $('#chatbot-container')[0]);
  $('#chatbot-container').removeClass('hidden');
}

function onSpiderEyeClicked(evt, tpl) {
  if (!chatbotActive) {
    chatbotActive = true;
    tpl.$('#spidereye img').removeClass('pulse');

    if (Meteor.userId()) {
      insertEvent.call({
        name: 'spider_eye_clicked',
        userId: Meteor.userId(),
        category: COMPUTER_CATEGORY,
      }, (err) => {
        if (err) {
          Meteor.call(
            'Logger.client.logglyLog',
            `Problem setting up cleverbot: ${err}`);
        } else {
          showChatbot();
        }
      });
    } else {
      showChatbot();
    }
  }
}

Template.computerPage.events({
  'click #spidereye': onSpiderEyeClicked,
});

Template.chatbot2000.events({
  'keyup #chatbotInput': onMessageChanged,
});

function onChatbotRendered() {
  typeMessage('Is anybody there?^1000 Hello?', 'chatbotMessage');
}

function onComputerPageRendered() {
  $('#content').addClass('computer-page');
  $('#wrapper').addClass('computer-page');
  if(Meteor.userId()) {
    sessionNick.set(Meteor.userId());
  }
  Meteor.call('callingChatbot', sessionNick.get(), callingChatbotCallback);
  setTime();
  intervalId = Meteor.setInterval(setTime, 1000);
}

function onComputerPageDestroyed() {
  $('#content').removeClass('computer-page');
  $('#wrapper').removeClass('computer-page');
  chatbotActive = false;
  Meteor.clearInterval(intervalId);
}

Template.chatbot2000.onRendered(onChatbotRendered);
Template.computerPage.onRendered(onComputerPageRendered);
Template.computerPage.onDestroyed(onComputerPageDestroyed);
