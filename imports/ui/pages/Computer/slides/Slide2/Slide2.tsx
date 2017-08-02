require('../slides.scss');
require('./Slide2.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Power0 } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide2Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-2')}>
        <div className="background-layer" style={this.getBackgroundImageStyle('particles.svg')}></div>
        <div className="midground-layer">
          <div className="adell alphadOut" style={this.getBackgroundImageStyle('Adell.png', '/images/story/part1')} />
          <div className="lupov facing-left alphadOut" style={this.getBackgroundImageStyle('Lupov.png', '/images/story/part1')} />
        </div>
        <div className="foreground-layer"></div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.fromTo(
      document.getElementsByClassName('adell')[0],
      0.8,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      1);
    this.tl.fromTo(
      document.getElementsByClassName('lupov')[0],
      0.8,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      2);
  }
}

export const Slide2Container: any = GSAP()(Slide2Component);
export default Slide2Container;
