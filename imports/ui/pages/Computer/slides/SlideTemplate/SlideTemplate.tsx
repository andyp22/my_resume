require('./SlideTemplate.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Power0 } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import { SlideComponent } from '../../components/Slide';

class SlideTemplateComponent extends SlideComponent {
  render() {
    return (
      <div className={this.getComponentClasses('story-slide-content-0')}>
        <div className="background-layer" style={this.getBackgroundImageStyle('bgPlate.png')}></div>
        <div className="midground-layer"></div>
        <div className="foreground-layer"></div>
      </div>
    );
  }

  buildTimeline(): void {
    
  }
}

export const SlideTemplateContainer: any = GSAP()(SlideTemplateComponent);
export default SlideTemplateContainer;
