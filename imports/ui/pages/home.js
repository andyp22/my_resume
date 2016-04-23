import './home.html';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

function onFlameClicked(evt, tpl)  {
  console.log('click');
  tpl.$('.white-circle').removeClass('hidden');
  tpl.$('.white-circle').addClass('animated');
  tpl.$('.white-circle').addClass('bounceInUp');
}

Template.home_page.events({
  'click .flame-container' : onFlameClicked,
});
