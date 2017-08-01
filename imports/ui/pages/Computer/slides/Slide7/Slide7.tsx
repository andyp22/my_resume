require('./Slide7.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Power1 } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide7Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-7')}>
        <div className="background-layer">
          <div className="interior-bg alphadOut" style={this.getBackgroundImageStyle('interior-background.png')} />
        </div>
        <div className="midground-layer"></div>
        <div className="foreground-layer"></div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.fromTo(
      document.getElementsByClassName('interior-bg')[0],
      0.5,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      0.5);
    this.tl.to(
      document.getElementsByClassName('interior-bg')[0],
      15,
      {
        backgroundPositionX: 100,
        ease: Power1.easeOutIn,
      },
      2.5);
  }
}

export const Slide7Container: any = GSAP()(Slide7Component);
export default Slide7Container;
