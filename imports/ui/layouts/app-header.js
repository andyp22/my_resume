import './app-header.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { $ } from 'meteor/jquery';

function onFlameClicked() {
  $('#content').removeClass('fadeIn').addClass('fadeOut');

  function loadPageAfterFade() {
    Router.go('home');
    $('#content').removeClass('fadeOut');
  }

  Meteor.setTimeout(loadPageAfterFade, 1000);
  return false;
}

Template.applicationHeader.events({
  'click .flame-container': onFlameClicked,
});
