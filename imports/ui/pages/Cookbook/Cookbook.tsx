require('./Cookbook.scss');

import * as React from 'react';

interface CookbookProps { }
interface CookbookState { }

export class CookbookComponent extends React.Component<CookbookProps, CookbookState> {
  render() {
    const props = this.props;
    return (
      <h1>This is the Cookbook page</h1>
    );
  }
}

export const CookbookContainer: any = CookbookComponent;
export default CookbookContainer;
