import './home.html';

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';

Session.setDefault('session-started', false);

/*
 * Templete onRendered helper
 */
function onHomePageRendered() {
  if (Session.equals('session-started', false)) {
    Session.set('session-started', true);
    $('#flame').addClass('animated fadeIn');
  }
  $('body').addClass('hide-scroll');
}

Template.homePage.onRendered(onHomePageRendered);
