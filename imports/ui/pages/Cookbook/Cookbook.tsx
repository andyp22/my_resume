require('./Cookbook.scss');

import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';

interface CookbookProps { }
interface CookbookState { }

export class CookbookComponent extends React.Component<CookbookProps, CookbookState> {
  render() {
    const props = this.props;
    return (
      <Container className="cookbook-page page">
        <Header as="h1">This is the home page</Header>
      </Container>
    );
  }
}

export const CookbookContainer: any = CookbookComponent;
export default CookbookContainer;
