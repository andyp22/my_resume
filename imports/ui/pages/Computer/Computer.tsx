require('./Computer.scss');

import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { StoryBoardContainer } from './components/StoryBoard';

import TLQ from '../../data/story';

interface ComputerProps { }
interface ComputerState { }

export class ComputerComponent extends React.Component<ComputerProps, ComputerState> {
  render() {
    const props = this.props;
    return (
      <Container className="computer-page page" textAlign="center">
        <Header as="h1">Computer</Header>
        {/* TLQ.part1.map((step, index) => {
          return (
            <p className="story-step part1" key={index} dangerouslySetInnerHTML={{ __html: step.text }} />
          );
        }) */}
        <StoryBoardContainer storyText={TLQ.part1} />
      </Container>
    );
  }
}

export const ComputerContainer: any = ComputerComponent;
export default ComputerContainer;
