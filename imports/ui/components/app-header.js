import './app-header.html';

import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

function onFlameClicked(evt, tpl) {
  Router.go('home');
}

Template.ApplicationHeader.events({
  'click .flame-container': onFlameClicked
});
