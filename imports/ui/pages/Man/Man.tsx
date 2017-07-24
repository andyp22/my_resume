require('./Man.scss');

import * as React from 'react';
import { Container, Header, Checkbox } from 'semantic-ui-react';
import { ResumeComponent } from './components/Resume';
import { FunResumeComponent } from './components/FunResume';

interface ManProps { }
interface ManState {
  mode: string;
}

export class ManComponent extends React.Component<ManProps, ManState> {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'normal',
    }
  }
  render() {
    const props = this.props;
    return (
      <Container className="man-page page">
        <Header as="h1">{(this.state.mode === 'normal') ? 'Resume' : 'The Man'}</Header>
        <Checkbox
          toggle
          checked={(this.state.mode === 'normal' ? false : true)}
          onClick={() => {
            this.setState({ mode: (this.state.mode === 'normal' ? 'fun' : 'normal') });
          }}
        />
        {(this.state.mode === 'normal')
          ? <ResumeComponent />
          : <FunResumeComponent />}
      </Container>
    );
  }
}

export const ManContainer: any = ManComponent;
export default ManContainer;
