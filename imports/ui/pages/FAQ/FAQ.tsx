require('./FAQ.scss');

import * as React from 'react';

interface FAQProps { }
interface FAQState { }

export class FAQComponent extends React.Component<FAQProps, FAQState> {
  render() {
    const props = this.props;
    return (
      <h1>This is the FAQ page</h1>
    );
  }
}

export const FAQContainer: any = FAQComponent;
export default FAQContainer;
