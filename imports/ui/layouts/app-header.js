import './app-header.html';

import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

function onFlameClicked(evt, tpl) {
  $('#content').removeClass('fadeIn').addClass('fadeOut');
  
  function loadPageAfterFade() {
    Router.go('home');
    $('#content').removeClass('fadeOut');
  }
  
  Meteor.setTimeout(loadPageAfterFade, 1000);
  return false;
}

Template.ApplicationHeader.events({
  'click .flame-container': onFlameClicked
});
