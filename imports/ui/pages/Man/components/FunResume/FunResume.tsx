require('./FunResume.scss');

import * as React from 'react';
import { Container, Header, Checkbox } from 'semantic-ui-react';

export class FunResumeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'normal',
    }
  }
  render() {
    const props = this.props;
    return (
      <div>My fun resume</div>
    );
  }
}

export default FunResumeComponent;
