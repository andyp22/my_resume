require('./Slide39.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Circ } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';
import { Header } from 'semantic-ui-react';

class Slide39Component extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-39')}>
        <div className="background-layer">
          <div className="ai-bg" style={this.getBackgroundImageStyle('ai-bg.png')} />
        </div>
        <div className="midground-layer">
          <div className="ai-top alphadOut" style={this.getBackgroundImageStyle('ai-top.png')} />
          <div className="ai-bottom alphadOut" style={this.getBackgroundImageStyle('ai-bottom.png')} />
        </div>
        <div className="foreground-layer">
          <div className="eyes-2 alphadOut" style={this.getBackgroundImageStyle('eyes-2.png')} />
          <Header className="ai-text alphadOut" as="h2">INSUFFICIENT DATA FOR MEANINGFUL ANSWER</Header>
        </div>
      </div>
    );
  }

  buildTimeline(): void {
    this.tl.to(
      document.getElementsByClassName('ai-top')[0],
      1,
      { autoAlpha: 1 },
      1);
    this.tl.to(
      document.getElementsByClassName('ai-bottom')[0],
      1,
      { autoAlpha: 1 },
      1.5);
    this.tl.to(
      document.getElementsByClassName('eyes-2')[0],
      1,
      { autoAlpha: 1 },
      2);
    this.tl.to(
      document.getElementsByClassName('ai-text')[0],
      1,
      { autoAlpha: 1 },
      2);
  }
}

export const Slide39Container: any = GSAP()(Slide39Component);
export default Slide39Container;
