require('./Slide5.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Power0 } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide5Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-5')}>
        <div className="background-layer"></div>
        <div className="midground-layer"></div>
        <div className="foreground-layer alphadOut">
          <p>May 14, 2061</p>
        </div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.fromTo(
      document.getElementsByClassName('foreground-layer')[0],
      3,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      5);
  }
}

export const Slide5Container: any = GSAP()(Slide5Component);
export default Slide5Container;
