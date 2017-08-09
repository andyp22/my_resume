require('../slides.scss');
require('./Slide41.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Power0 } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide41Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-41')}>
        <div className="background-layer" style={this.getBackgroundImageStyle('bgPlate.png')}></div>
        <div className="midground-layer"></div>
        <div className="foreground-layer"></div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.to(
      document.getElementsByClassName('background-layer')[0],
      8,
      {
        backgroundPositionY: 0,
        ease: Power0.easeNone,
      },
      0.1);
  }
}

export const Slide41Container: any = GSAP()(Slide41Component);
export default Slide41Container;
