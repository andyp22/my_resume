import './cookbook.html';
import '../data/cookbook.js';
import '../components/viewportSize.js';

import skrollr from 'skrollr';
import imagesloaded from 'imagesloaded';

// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

function onSkrollrRendered()  {
  // Setup variables
  $window = this.$(window);
  $slide = this.$('.homeSlide');
  $slideTall = this.$('.homeSlideTall');
  $slideTall2 = this.$('.homeSlideTall2');
  $cookbook = this.$('#cookbook');
  
  //FadeIn all sections   
  $cookbook.imagesLoaded( function() {
    setTimeout(function() {
      // Resize sections
      adjustWindow();
      // Fade in sections
      $cookbook.removeClass('loading').addClass('loaded');
    }, 800);
  });
  
  function adjustWindow(){
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            console.log(data.curTop);
        }
    });
    
    // Get window size
    winH = $window.height();
    // Keep minimum height 550
    if(winH <= 550) {
      winH = 550;
    } 
      
    // Resize our slides
    $slide.height(winH);
    $slideTall.height(winH*2);
    $slideTall2.height(winH*3);
    // Refresh Skrollr after resizing our sections
    s.refresh($('.homeSlide'));
  }
}

Template.cookbookPage.onRendered(onSkrollrRendered);

function onCookbookPageDestroyed()  {
  let s = skrollr.get();
  if (s) {
    s.destroy();
  }
}

Template.cookbookPage.onDestroyed(onCookbookPageDestroyed);
