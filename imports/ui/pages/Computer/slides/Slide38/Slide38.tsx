require('./Slide38.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Circ } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide38Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-38')}>
        <div className="background-layer">
          <div className="ai-bg" style={this.getBackgroundImageStyle('ai-bg.png')} />
        </div>
        <div className="midground-layer">
          <div className="ai-top" style={this.getBackgroundImageStyle('ai-top.png')} />
          <div className="ai-bottom" style={this.getBackgroundImageStyle('ai-bottom.png')} />
        </div>
        <div className="foreground-layer">
          <div className="eyes-1" style={this.getBackgroundImageStyle('eyes-1.png')} />
          <div className="eyes-3" style={this.getBackgroundImageStyle('eyes-3.png')} />
        </div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.to(
      document.getElementsByClassName('eyes-1')[0],
      1,
      { autoAlpha: 0 },
      1);
    this.tl.fromTo(
      document.getElementsByClassName('eyes-3')[0],
      1,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      1.5);
    this.tl.to(
      document.getElementsByClassName('ai-top')[0],
      1,
      { autoAlpha: 0 },
      2);
    this.tl.to(
      document.getElementsByClassName('ai-bottom')[0],
      1,
      { autoAlpha: 0 },
      2.5);
    this.tl.to(
      document.getElementsByClassName('eyes-3')[0],
      1,
      { autoAlpha: 0 },
      3.5);
  }
}

export const Slide38Container: any = GSAP()(Slide38Component);
export default Slide38Container;
