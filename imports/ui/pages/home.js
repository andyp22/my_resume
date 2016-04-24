import './home.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';
import { Router } from 'meteor/iron:router';

Session.setDefault('section-clicked', false);

/*
 * Event helpers
 */
function onFlameClicked(evt, tpl) {
  if (Session.equals('section-clicked', false)) {
    Session.set('section-clicked', true);
    tpl.$('.white-circle').removeClass('hidden').addClass('animated bounceInUp');
  }
}

function onCircleClicked(evt, tpl) {
  tpl.$('#home_page').removeClass('animated fadeIn zoomIn').addClass('animated fadeOut');

  function loadPageAfterFade() {
    const path = (!evt.currentTarget.pathname) ? '/contact' : evt.currentTarget.pathname;
    Router.go(path);
    $('body').removeClass('hide-scroll');
  }

  Meteor.setTimeout(loadPageAfterFade, 1000);
  return false;
}

Template.homePage.events({
  'click .flame-container': onFlameClicked,
  'click .white-circle': onCircleClicked,
});
/*
 * Templete onRendered helper
 */
function onHomePageRendered() {
  if (Session.equals('section-clicked', true)) {
    this.$('#flame').removeClass('animated fadeIn');
    this.$('.white-circle').removeClass('hidden');
    this.$('#home_page').addClass('animated fadeIn zoomIn');
  }
  $('body').addClass('hide-scroll');
}

Template.homePage.onRendered(onHomePageRendered);
