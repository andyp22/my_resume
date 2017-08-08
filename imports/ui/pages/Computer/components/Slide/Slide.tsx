require('./Slide.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { TimelineMax } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';

export interface SlideProps {
  imageDir: string;
  paused: boolean;
  transition: boolean;
  data: any;
}

export interface SlideState { }

export class SlideComponent extends React.Component<SlideProps, SlideState> {
  animationController: any;
  tl: TimelineMax;

  render(): any {
    const classes: string = this.getComponentClasses();
    return (
      <div className={classes}></div>
    );
  }

  componentDidMount(): void {
    this.initTimeline(this.props.paused, this.props.transition);
    this.buildTimeline();
  }

  addAnimation(moveAnimation: any, options: any = {}): any { }

  initTimeline(paused: boolean, transition: boolean) {
    this.tl = new TimelineMax({ paused });
    if (transition) {
      this.tl.fromTo(
        document.getElementsByClassName('story-slide-content')[0],
        0.5,
        { autoAlpha: 0 },
        { autoAlpha: 1 },
        0);
    }
  }

  buildTimeline(): void { }

  getComponentClasses(classes: string = '') {
    return `story-slide-content ${classes} ${this.props.transition ? 'alphadOut' : ''}`;
  }

  getImageUrl() {
    return `/images/story/${this.props.imageDir}`;
  }

  getBackgroundImageStyle(filename: string, filepath: string = this.getImageUrl()) {
    return {
      backgroundImage: `url('${filepath}/${filename}')`,
    };
  }
}

export const SlideContainer: any = GSAP()(SlideComponent);
export default SlideContainer;
