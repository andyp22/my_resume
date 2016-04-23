import './home.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Router } from 'meteor/iron:router';

/*
 * Event helpers
 */
function onFlameClicked(evt, tpl)  {
  if(Session.get( 'section-clicked' ) === false) {
    Session.set( 'section-clicked', true );
    tpl.$('.white-circle').removeClass('hidden').addClass('animated bounceInUp');
  }
}

function onCircleClicked(evt, tpl)  {
  tpl.$('#home_page').removeClass('animated fadeIn zoomIn').addClass('animated fadeOut');
  
  const loadPageAfterFade = function() {
    const path = (!evt.currentTarget || !evt.currentTarget.pathname) ? '/contact': evt.currentTarget.pathname;
    Router.go(path);
    $('body').removeClass('hide-scroll');
  };
  
  Meteor.setTimeout( loadPageAfterFade, 1000 );
  return false;
}

Template.home_page.events({
  'click .flame-container' : onFlameClicked,
  'click .white-circle' : onCircleClicked,
});
/*
 * Templete onRendered helper
 */
function onHomePageRendered()  {
  if(Session.get( 'section-clicked' ) === true) {
    this.$('#flame').removeClass('animated fadeIn');
    this.$('.white-circle').removeClass('hidden');
    this.$('#home_page').addClass('animated fadeIn zoomIn');
  }
  $('body').addClass('hide-scroll');
}

Template.home_page.onRendered( onHomePageRendered );
