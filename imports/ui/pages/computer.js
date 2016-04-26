import './computer.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import typed from 'typed.js';

Session.setDefault('session-nick', '');

let chatbotActive = false;
let intervalId = -1;

if (Session.equals('session-nick', '')) {
  Session.set('session-nick', Random.id());
}

function callingChatbotCallback(err, res) {
  if (err) {
    console.log(err);
  } else {
    if(!res) {
      console.log("Chat session already started.");
    } else {
      console.log(err, res);
    }
  }
}

function askingChatbotCallback(err, res) {
  if (!err) {
    $('#chatbot2000').empty();
    typeMessage(res, 'chatbotMessage');
  }
}

function onMessageChanged(evt, tpl) {
  evt.preventDefault();
  // enter key pressed
  if(evt.keyCode == 13) {
    $input = tpl.$('#chatbotInput');
    Meteor.call('askingChatbot', $input.val(), askingChatbotCallback);
    showMessage($input.val());
    $input.val('');
  }
}

function showMessage(message, classes) {
  if(!classes) {
    classes = 'message';
  }
  $('#chatbot2000').append('<p class="' + classes + '">' + message + '</p>');
}

function typeMessage(message, classes) {
  if(!classes) {
    classes = 'message';
  }
  $('#chatbotInput').blur();
  $('#chatbot2000').append('<p class="typed-message ' + classes + '"></p>');
  $(".typed-message").typed({
    strings: [message],
    contentType: 'text',
    showCursor: false,
    callback: function() {
      $('#chatbotInput').focus();
    } 
  });
}

function onSpiderEyeClicked(evt, tpl) {
  if (!chatbotActive) {
    chatbotActive = true;
    tpl.$('#spidereye img').removeClass('pulse');
    
    Blaze.render(Template.chatbot2000, $('#chatbot-container')[0]);
    $('#chatbot-container').removeClass('hidden');
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
  Meteor.call('callingChatbot', Session.get('session-nick'), callingChatbotCallback);
  
  setTime();
  intervalId = Meteor.setInterval(setTime, 1000);
}

function onComputerPageDestroyed()  {
  $('#content').removeClass('computer-page');
  $('#wrapper').removeClass('computer-page');
  chatbotActive = false;
  Meteor.clearInterval(intervalId);
}

function setTime() {
  const today = new Date();
  let hours = today.getHours();
  let ampm = (hours > 11 || hours == 0) ? 'PM' : 'AM';
  hours = (hours > 12) ? hours - 12 : hours;
  if(hours == 0) {
    hours = 12;
  }
  let minutes = today.getMinutes();
  if(minutes < 10) {
    minutes = '0' + minutes;
  }
  $('.time').html(hours + ':' + minutes + ' ' + ampm);
}

Template.chatbot2000.onRendered(onChatbotRendered);
Template.computerPage.onRendered(onComputerPageRendered);
Template.computerPage.onDestroyed(onComputerPageDestroyed);
