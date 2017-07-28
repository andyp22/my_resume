require('./Slide1.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Power0 } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide1Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-1')}>
        <div className="background-layer" style={this.getBackgroundImageStyle('bgPlate.png')}></div>
        <div className="midground-layer"></div>
        <div className="foreground-layer"></div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.to(
      document.getElementsByClassName('background-layer')[0],
      20,
      {
        bezier: [
          {
            backgroundPositionX: 25,
            backgroundPositionY: 55,
          },
          {
            backgroundPositionX: 50,
            backgroundPositionY: 75,
          },
          {
            backgroundPositionX: 100,
            backgroundPositionY: 95,
          },
        ],
        ease: Power0.easeNone,
      },
      0.1);
  }
}

export const Slide1Container: any = GSAP()(Slide1Component);
export default Slide1Container;
