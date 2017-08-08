require('../slides.scss');
require('./Slide9.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Circ } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide9Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-9')}>
        <div className="background-layer">
          <div className="table-bg " style={this.getBackgroundImageStyle('table-background.png', '/images/story/part1')} />
        </div>
        <div className="midground-layer">
          <div className="whiskey-bottle " style={this.getBackgroundImageStyle('whiskey.png', '/images/story/part1')} />
          <div className="adell alphadOut" style={this.getBackgroundImageStyle('Adell.png', '/images/story/part1')} />
          <div className="lupov facing-left alphadOut" style={this.getBackgroundImageStyle('Lupov.png', '/images/story/part1')} />
        </div>
        <div className="foreground-layer">
          <div className="glass-1 glass " style={this.getBackgroundImageStyle('highball.png', '/images/story/part1')} />
          <div className="glass-2 glass " style={this.getBackgroundImageStyle('highball.png', '/images/story/part1')} />
        </div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.fromTo(
      document.getElementsByClassName('adell')[0],
      0.5,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      1);
    this.tl.to(
      document.getElementsByClassName('glass-2')[0],
      0.5,
      { autoAlpha: 0 },
      1);
    this.tl.to(
      document.getElementsByClassName('glass-2')[0],
      0.5,
      { top: 340, left: 585 },
      3);
    this.tl.fromTo(
      document.getElementsByClassName('lupov')[0],
      0.8,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      10);
    this.tl.to(
      document.getElementsByClassName('adell')[0],
      0.8,
      { autoAlpha: 0 },
      10);
    this.tl.to(
      document.getElementsByClassName('glass-1')[0],
      0.8,
      { autoAlpha: 0 },
      10);
    this.tl.to(
      document.getElementsByClassName('glass-2')[0],
      0.8,
      { autoAlpha: 1 },
      10);
  }
}

export const Slide9Container: any = GSAP()(Slide9Component);
export default Slide9Container;
