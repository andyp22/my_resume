require('../slides.scss');
require('./ConversationSlide.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Circ } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class ConversationSlideComponent extends SlideComponent {
  character: string;
  glass: string;

  constructor(props) {
    super(props);
    this.getSlideData(props);
  }

  render() {
    const classes = this.character.toLowerCase() === 'lupov' ? `${this.character.toLowerCase()} facing-left alphadOut` : `${this.character.toLowerCase()} alphadOut`;
    return (
      <div className={this.getComponentClasses('story-slide-content-conversation-slide')}>
        <div className="background-layer">
          <div className="table-bg " style={this.getBackgroundImageStyle('table-background.png', '/images/story/part1')} />
        </div>
        <div className="midground-layer">
          <div className="whiskey-bottle " style={this.getBackgroundImageStyle('whiskey.png', '/images/story/part1')} />
          <div className={classes} style={this.getBackgroundImageStyle(`${this.character}.png`, '/images/story/part1')} />
        </div>
        <div className="foreground-layer">
          <div className={`${this.glass} glass`} style={this.getBackgroundImageStyle('highball.png', '/images/story/part1')} />
        </div>
      </div>
    );
  }

  componentWillUpdate(nextProps: any, nextState: any) {
    this.tl.pause();
    this.tl.kill();

    this.getSlideData(nextProps);
    this.initTimeline(nextProps.paused, nextProps.transition);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    this.buildTimeline();
  }

  getSlideData(props: any) {
    this.character = props.data.character;
    this.glass = this.character.toLowerCase() === 'lupov' ? 'glass-2' : 'glass-1';
  }

  buildTimeline(): void {
    this.tl.fromTo(
      document.getElementsByClassName(this.character.toLowerCase())[0],
      0.5,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      0.1);
    this.tl.fromTo(
      document.getElementsByClassName(this.glass)[0],
      0.5,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      0.1);
  }
}

export const ConversationSlideContainer: any = GSAP()(ConversationSlideComponent);
export default ConversationSlideContainer;
