require('./Recipe.scss');

import * as React from 'react';
import { Container, Header, List, Segment, Table, Image } from 'semantic-ui-react';

interface RecipeProps {
  recipe: any;
}
interface RecipeState { }

export class RecipeComponent extends React.Component<RecipeProps, RecipeState> {
  render() {
    const recipe = this.props.recipe;
    return (
      <Container className="recipe-component">
        <Header as="h1">
          <span className="recipe-title">{recipe.title}</span>
          <span className="recipe-makes">Makes: {recipe.makes}</span>
        </Header>
        <Segment className="recipe-info">
          <Image src={recipe.image} alt={`A picture of ${recipe.title}`} />
          <p>{recipe.description}</p>
        </Segment>
        <Segment className="recipe-ingredients">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Ingredient</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {recipe.ingredients.map((item, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell>{item.label}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Segment>
        <Segment className="recipe-steps">
          <List as="ol">
            {recipe.directions.map((step, index) => {
              return (
                <List.Item as="li" key={index}>
                  {step.text}
                </List.Item>
              );
            })}
          </List>
        </Segment>
      </Container>
    );
  }
};

export default RecipeComponent;
