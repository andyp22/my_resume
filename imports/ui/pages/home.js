import './home.html';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

function onFlameClicked(evt, tpl)  {
  if(Session.get( 'section-clicked' ) === false) {
    Session.set( 'section-clicked', true );
    tpl.$('.white-circle').removeClass('hidden');
    tpl.$('.white-circle').addClass('animated');
    tpl.$('.white-circle').addClass('bounceInUp');
  }
}

Template.home_page.events({
  'click .flame-container' : onFlameClicked,
});

function onHomePageRendered()  {
  if(Session.get( 'section-clicked' ) === true) {
    this.$('#flame').removeClass('animated');
    this.$('#flame').removeClass('fadeIn');
    this.$('.white-circle').removeClass('hidden');
    this.$('#home_page').addClass('animated');
    this.$('#home_page').addClass('fadeIn');
    this.$('#home_page').addClass('zoomIn');
  }
}

Template.home_page.onRendered( onHomePageRendered );
