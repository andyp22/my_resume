require('../slides.scss');
require('./Slide40.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Circ } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide40Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-40')}>
        <div className="background-layer"></div>
        <div className="midground-layer"></div>
        <div className="foreground-layer">
          <div className="lupov " style={this.getBackgroundImageStyle('Lupov.png', '/images/story/part1')} />
        </div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.fromTo(
      document.getElementsByClassName('lupov')[0],
      0.5,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      1);
  }
}

export const Slide40Container: any = GSAP()(Slide40Component);
export default Slide40Container;
