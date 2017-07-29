require('./SwitchPage.scss');

import * as React from 'react';
import { Container, Header, Checkbox } from 'semantic-ui-react';

interface SwitchPageProps {
  pageName: string;
}
interface SwitchPageState {
  mode: string;
}

export class SwitchPageComponent extends React.Component<SwitchPageProps, SwitchPageState> {
  pageName: string;

  constructor(props) {
    super(props);

    this.pageName = props.pageName;

    this.state = {
      mode: localStorage.getItem(this.getLocalStorageKey()) || 'state_a',
    }
  }

  render() {
    const props = this.props;
    return (
      <Container className={`${props.pageName}-page switch-page page`} textAlign="center">
        <Header as="h1">{(this.state.mode === 'state_a') ? this.getPageTitles().state_a : this.getPageTitles().state_b}</Header>
        <Checkbox
          toggle
          checked={(this.state.mode === 'state_a' ? false : true)}
          onClick={() => {
            const mode = this.state.mode === 'state_a' ? 'state_b' : 'state_a';
            localStorage.setItem(this.getLocalStorageKey(), mode);
            this.setState({ mode });
          }}
        />
        {(this.state.mode === 'state_a')
          ? React.createElement(this.getComponents().state_a)
          : React.createElement(this.getComponents().state_b)}
      </Container>
    );
  }

  getPageTitles(): any {
    return {
      state_a: 'State A',
      state_b: 'State B',
    };
  }

  getComponents(): any {
    return {
      state_a: null,
      state_b: null,
    };
  }

  getLocalStorageKey(): string {
    return `${this.props.pageName}-page-state`;
  }
}

export const SwitchPageContainer: any = SwitchPageComponent;
export default SwitchPageContainer;
