require('../slides.scss');
require('./Slide8.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Circ } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide8Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-8')}>
        <div className="background-layer">
          <div className="table-bg " style={this.getBackgroundImageStyle('table-background.png', '/images/story/part1')} />
        </div>
        <div className="midground-layer">
          <div className="whiskey-bottle " style={this.getBackgroundImageStyle('whiskey.png', '/images/story/part1')} />
        </div>
        <div className="foreground-layer">
          <div className="glass-1 glass " style={this.getBackgroundImageStyle('highball.png', '/images/story/part1')} />
          <div className="glass-2 glass " style={this.getBackgroundImageStyle('highball.png', '/images/story/part1')} />
        </div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.to(
      document.getElementsByClassName('table-bg')[0],
      5,
      {
        backgroundPositionY: -270,
        ease: Circ.easeOutIn,
      },
      0.5);
    this.tl.to(
      document.getElementsByClassName('whiskey-bottle')[0],
      5,
      {
        top: -10,
        ease: Circ.easeOutIn,
      },
      0.5);
    this.tl.to(
      document.getElementsByClassName('glass-1')[0],
      5,
      {
        top: 330,
        ease: Circ.easeOutIn,
      },
      0.5);
    this.tl.to(
      document.getElementsByClassName('glass-2')[0],
      5,
      {
        top: 290,
        ease: Circ.easeOutIn,
      },
      0.5);
  }
}

export const Slide8Container: any = GSAP()(Slide8Component);
export default Slide8Container;
