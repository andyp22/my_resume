require('./Home.scss');

import * as React from 'react';

interface HomeProps { }
interface HomeState { }

export class HomeComponent extends React.Component<HomeProps, HomeState> {
  render() {
    const props = this.props;
    return (
      <h1>This is the home page</h1>
    );
  }
}

export const HomeContainer: any = HomeComponent;
export default HomeContainer;
