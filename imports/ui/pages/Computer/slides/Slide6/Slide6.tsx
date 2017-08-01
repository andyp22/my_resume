require('./Slide6.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Power0 } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide6Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-6')}>
        <div className="background-layer">
          <div className="purple-bg alphadOut" style={this.getBackgroundImageStyle('purple-background.png')} />
        </div>
        <div className="midground-layer">
          <div className="exploded-bg alphadOut" style={this.getBackgroundImageStyle('purple-background-exploded.png')} />
        </div>
        <div className="foreground-layer">
          <div className="sun" style={this.getBackgroundImageStyle('sun.png')} />
        </div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.fromTo(
      document.getElementsByClassName('purple-bg')[0],
      0.5,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      4.5);
    this.tl.fromTo(
      document.getElementsByClassName('exploded-bg')[0],
      0.3,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      9);
  }
}

export const Slide6Container: any = GSAP()(Slide6Component);
export default Slide6Container;
