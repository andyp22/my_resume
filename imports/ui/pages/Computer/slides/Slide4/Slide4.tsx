require('./Slide4.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Circ, RoughEase, Linear } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class Slide4Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-4')}>
        <div className="background-layer"></div>
        <div className="midground-layer">
          <div className="earth" style={this.getBackgroundImageStyle('earth.png')} />
          <div className="planet-1" style={this.getBackgroundImageStyle('planet-1.png')} />
          <div className="planet-2" style={this.getBackgroundImageStyle('planet-2.png')} />
          <div className="planet-3" style={this.getBackgroundImageStyle('planet-3.png')} />
          <div className="planet-4" style={this.getBackgroundImageStyle('planet-4.png')} />
        </div>
        <div className="foreground-layer">
          <div className="whole-ship">
            <div className="engine-flames alphadOut" style={this.getBackgroundImageStyle('engine-flames.png')} />
            <div className="spaceship alphadOut" style={this.getBackgroundImageStyle('spaceship.png')} />
          </div>
        </div>
      </div>
    );
  }

  buildTimeline(): void {
    const planetLeft = -800;
    const planetTop = 1200;
    this.tl.to(
      document.getElementsByClassName('earth')[0],
      4,
      {
        top: -700,
        left: -100,
        ease: Circ.easeIn,
      },
      1);
    this.tl.fromTo(
      document.getElementsByClassName('spaceship')[0],
      3,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      4.5);
    this.tl.fromTo(
      document.getElementsByClassName('whole-ship')[0],
      3,
      { rotation: 0 },
      { rotation: 55 },
      4.5);
    this.tl.fromTo(
      document.getElementsByClassName('engine-flames')[0],
      1,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      7.5);
    this.tl.fromTo(
      document.getElementsByClassName('spaceship')[0],
      0.3,
      { x: -1 },
      {
        x: 1,
        ease: RoughEase.ease.config({
          strength: 4,
          points: 20,
          template: Linear.easeNone,
          randomize: false
        }),
        clearProps: "x",
        repeat: -1,
      },
      8.5);
    this.tl.fromTo(
      document.getElementsByClassName('engine-flames')[0],
      0.3,
      { x: -1 },
      {
        x: 1,
        ease: RoughEase.ease.config({
          strength: 1,
          points: 2,
          template: Linear.easeNone,
          randomize: false
        }),
        clearProps: "x",
        repeat: -1,
      },
      8.5);
    this.tl.to(
      document.getElementsByClassName('planet-1')[0],
      3,
      {
        top: planetTop,
        left: planetLeft,
        ease: Circ.easeIn,
      },
      8.5);
    this.tl.to(
      document.getElementsByClassName('planet-2')[0],
      2,
      {
        top: planetTop,
        left: planetLeft,
        ease: Circ.easeIn,
      },
      12);
    this.tl.to(
      document.getElementsByClassName('planet-3')[0],
      1.5,
      {
        top: planetTop,
        left: planetLeft,
        ease: Circ.easeIn,
      },
      14);
    this.tl.to(
      document.getElementsByClassName('planet-4')[0],
      1,
      {
        top: planetTop,
        left: planetLeft,
        ease: Circ.easeIn,
      },
      15);
    this.tl.to(
      document.getElementsByClassName('whole-ship')[0],
      2,
      {
        top: -500,
        left: 900,
        ease: Circ.easeIn,
      },
      15);
  }
}

export const Slide4Container: any = GSAP()(Slide4Component);
export default Slide4Container;
