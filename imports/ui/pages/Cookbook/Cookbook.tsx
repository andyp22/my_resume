require('./Cookbook.scss');

import * as React from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import { TabsContainer, TCProps, TabListData } from "react-tabs-container";
import { CategoryTabComponent } from './components/Category';

import cookbookData from '../../data/cookbook';

interface CookbookProps { }
interface CookbookState { }

const recipeFilter = (name: string) => {
  return cookbookData.filter(recipe => {
    return recipe.category === name;
  });
};

export const tabListData: TabListData[] = [
  {
    id: "tab1",
    name: "Breakfast",
    component: props => {
      return <CategoryTabComponent recipes={recipeFilter('breakfast')} name="Breakfast" />;
    },
    permissions: ["all"]
  },
  {
    id: "tab2",
    name: "Sweets",
    component: props => {
      return <CategoryTabComponent recipes={recipeFilter('sweets')} name="Sweets" />;
    },
    permissions: ["all"]
  },
  {
    id: "tab3",
    name: "Sides",
    component: props => {
      return <CategoryTabComponent recipes={recipeFilter('sides')} name="Sides" />;
    },
    permissions: ["all"]
  },
  {
    id: "tab4",
    name: "Specialty",
    component: props => {
      return <CategoryTabComponent recipes={recipeFilter('specialty')} name="Specialty" />;
    },
    permissions: ["all"]
  },
];

export class CookbookComponent extends React.Component<CookbookProps, CookbookState> {
  getTabContainerProps(): TCProps {
    return {
      tabList: ["tab1", "tab2", "tab3", "tab4"],
      tabListData,
      permissions: ["all"],
      containerName: "cookbook-page-view",
      classes: "cookbook-page-view-tabs",
      viewType: "top-level",
      dataPassThru: {}
    };
  }

  render() {
    return (
      <Container className="cookbook-page page">
        <Header as="h1">My Cookbook</Header>
        <p>I love to cook. These are some of my favorite recipes.</p>
        <TabsContainer {...this.getTabContainerProps() } />
      </Container>
    );
  }
}

export const CookbookContainer: any = CookbookComponent;
export default CookbookContainer;
