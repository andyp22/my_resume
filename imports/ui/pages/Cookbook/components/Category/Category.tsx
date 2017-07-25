require('./Category.scss');

import * as React from 'react';
import { Container, Header, List, Button } from 'semantic-ui-react';
import { RecipeComponent } from '../Recipe';

interface CategoryProps {
  name: string;
  recipes: any[];
}
interface CategoryState {
  recipeId: string;
}

export class CategoryTabComponent extends React.Component<CategoryProps, CategoryState> {
  constructor(props) {
    super(props);

    this.state = {
      recipeId: '-1',
    }
  }

  getRecipeList(recipes) {
    return (
      <List>
        {recipes.map((recipe, index) => {
          return (
            <List.Item
              key={index}
              onClick={(evt, target) => {
                this.setState({ recipeId: recipe.id });
              }}>
              {recipe.title}
            </List.Item>
          );
        })}
      </List>
    );
  }

  getRecipeComponent(recipe) {
    if (!recipe) {
      return (
        <Container>
          <Button onClick={() => {
            this.setState({ recipeId: '-1' })
          }}>
            Back to Recipe Index
          </Button>
          Error finding recipe data.
      </Container>
      );
    }
    return (
      <Container>
        <Button onClick={() => {
          this.setState({ recipeId: '-1' })
        }}>
          Back to Recipe Index
          </Button>
        <RecipeComponent recipe={recipe} />
      </Container>
    );
  }

  render() {
    const props = this.props;
    return (
      <Container>
        {this.state.recipeId !== '-1'
          ? ''
          : <Header>Please select a recipe:</Header>}
        {this.state.recipeId !== '-1'
          ? this.getRecipeComponent(props.recipes.find(recipe => (recipe.id === this.state.recipeId)))
          : this.getRecipeList(props.recipes)}
      </Container>
    );
  }
};

export default CategoryTabComponent;