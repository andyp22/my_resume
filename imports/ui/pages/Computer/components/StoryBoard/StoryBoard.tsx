require('./StoryBoard.scss');
import { TimelineLite } from 'gsap';
import { GSAP } from '../../../../../utils/GsapEnhancer';
import Slides from '../../slides';

import * as React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';

interface StoryBoardProps {
  storyText: any[];
}
interface StoryBoardState {
  textIndex: number;
  started: boolean;
}

export class StoryBoardComponent extends React.Component<StoryBoardProps, StoryBoardState> {
  animationController: any;
  tl: TimelineLite;
  captionAnimationDelay = 0.5;
  captionAnimationLength = 2;

  constructor(props) {
    super(props);

    this.state = {
      textIndex: 0,
      started: false,
    }
  }

  getOpeningComponent() {
    return (
      <div className="opening-slide">
        <Header as="h2">The Last Question</Header>
        <Header as="h3">by Isaac Asimov</Header>
      </div>
    );
  }

  getClosingComponent() {
    return (
      <div className="closing-slide">
        <Header as="h2">Credits</Header>
      </div>
    );
  }

  getNextSlide() {
    const slideNumber = this.state.textIndex + 1;
    const nextSlideData = this.props.storyText[this.state.textIndex];
    console.log(nextSlideData.transition);
    const name = `Slide${slideNumber}Container`;
    if (Slides[name]) {
      console.log(nextSlideData.transition);
      return React.createElement(
        Slides[name],
        {
          imageDir: `part1/slide${slideNumber}`,
          paused: false,
          transition: (nextSlideData.transition !== undefined) ? nextSlideData.transition : true,
        }
      );
    } else {
      console.log(`No component by that name exists: ${name}`);
      return null;
    }
  }

  isItOver() {
    return this.state.textIndex === (this.props.storyText.length - 1);
  }

  onNextButtonClicked() {
    if (this.state.started) {
      if (!this.isItOver()) {
        this.setState({ textIndex: this.state.textIndex + 1 });
      } else {
        this.setState({ started: false });
      }
    } else {
      if (!this.isItOver()) {
        this.setState({ started: true });
      } else {
        this.setState({ textIndex: 0 });
      }
    }
  }

  render() {
    const props = this.props;
    const nextText = props.storyText[this.state.textIndex].text;
    return (
      <Container className="storyboard-page page" textAlign="center">
        <div className="presentation" aria-hidden="true">{
          (this.state.started)
            ? this.getNextSlide()
            : (!this.isItOver()) ? this.getOpeningComponent() : this.getClosingComponent()
        }</div>
        <div className={`presentation-captions ${(this.state.started) ? '' : 'hidden'}`}>
          <p className={`story-slide-captions story-slide-captions${this.state.textIndex} alphadOut`} dangerouslySetInnerHTML={{ __html: ((this.state.started) ? nextText : '') }} />
        </div>
        <div className="presentation-controls">
          <Button onClick={() => {
            this.onNextButtonClicked();
          }}>
            {
              (this.state.started)
                ? 'Next'
                : (!this.isItOver()) ? 'Start' : 'Restart'
            }
          </Button>
        </div>
      </Container>
    );
  }

  componentDidMount(): void {
    console.log('mounted');
    this.initTimeline(true);
  }

  componentDidUpdate(prevProps: any, prevState: any): void {
    if (prevState.textIndex !== this.state.textIndex ||
      (this.state.started && prevState.started !== this.state.started)) {
      // Update to the next slide
      this.tl.pause();
      this.tl.kill();

      this.initTimeline(false);
    }
  }

  initTimeline(paused: boolean) {
    this.tl = new TimelineLite({ paused });
    this.tl.fromTo(
      document.getElementsByClassName('story-slide-captions')[0],
      this.captionAnimationLength,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      this.captionAnimationDelay);
  }

  addAnimation(moveAnimation: any, options: any = {}): any { }

}

export const StoryBoardContainer: any = GSAP()(StoryBoardComponent);
export default StoryBoardContainer;
