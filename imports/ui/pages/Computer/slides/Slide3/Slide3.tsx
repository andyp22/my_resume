require('./Slide3.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Power0 } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide3Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-3')}>
        <div className="background-layer"></div>
        <div className="midground-layer">
          <div className="symbol-1 alphadOut" style={this.getBackgroundImageStyle('symbol-1.png')} />
          <div className="symbol-2 alphadOut" style={this.getBackgroundImageStyle('symbol-2.png')} />
          <div className="symbol-3 alphadOut" style={this.getBackgroundImageStyle('symbol-3.png')} />
          <div className="symbol-4 alphadOut" style={this.getBackgroundImageStyle('symbol-4.png')} />
        </div>
        <div className="foreground-layer"></div>
      </div>
    );
  }

  buildTimeline(): void {
    const duration = 2.5;
    this.tl.fromTo(
      document.getElementsByClassName('symbol-1')[0],
      duration,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      1);
    this.tl.to(
      document.getElementsByClassName('symbol-1')[0],
      duration*0.75,
      { autoAlpha: 0 },
      duration + 1);
    this.tl.fromTo(
      document.getElementsByClassName('symbol-2')[0],
      duration,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      duration*2 + 1);
    this.tl.to(
      document.getElementsByClassName('symbol-2')[0],
      duration*0.75,
      { autoAlpha: 0 },
      duration*3 + 1);
    this.tl.fromTo(
      document.getElementsByClassName('symbol-3')[0],
      duration,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      duration*4 + 1);
    this.tl.to(
      document.getElementsByClassName('symbol-3')[0],
      duration*0.75,
      { autoAlpha: 0 },
      duration*5 + 1);
    this.tl.fromTo(
      document.getElementsByClassName('symbol-4')[0],
      duration,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      duration*6 + 1);
  }
}

export const Slide3Container: any = GSAP()(Slide3Component);
export default Slide3Container;
