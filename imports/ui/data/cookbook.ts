/* eslint max-len: "off" */
/* eslint-env es6 */

interface IIngredient {
  id: string;
  label: string;
  quantity: string;
}

interface IDirection {
  id: string;
  text: string;
}

interface IRecipe {
  id: string;
  title: string;
  category: string;
  makes: string;
  image: string;
  description: string;
  ingredients: IIngredient[];
  directions: IDirection[];
}

const cookbookData: IRecipe[] = [
  {
    id: '1',
    title: 'Granola',
    category:'breakfast',
    makes: '8 cups',
    image: 'images/Granola_7365.png',
    description: 'Granola is a great breakfast treat. This recipe can be used as the base for many tasty granola varieties.',
    ingredients: [
      {
        id: '1',
        label: 'oats',
        quantity: '6 cups',
      },
      {
        id: '2',
        label: 'shredded coconut',
        quantity: '1.5 cups',
      },
      {
        id: '3',
        label: 'brown sugar, packed',
        quantity: '0.5 cups',
      },
      {
        id: '4',
        label: 'honey',
        quantity: '0.5 cups',
      },
      {
        id: '5',
        label: 'oil',
        quantity: '0.5 cups',
      },
      {
        id: '6',
        label: 'salt',
        quantity: '1.5 teaspoons',
      },
      {
        id: '7',
        label: 'raisins',
        quantity: '1 cup',
      },
      {
        id: '8',
        label: 'cinnamon',
        quantity: '2 tablespoons',
      }
    ],
    directions: [
      {
        id: '1',
        text: 'Preheat oven to 250 degrees.',
      },
      {
        id: '2',
        text: 'Combine oats, coconut, sugar, salt, and cinnamon.',
      },
      {
        id: '3',
        text: 'Combine honey and oil. Mix well.',
      },
      {
        id: '4',
        text: 'Add wet and dry.',
      },
      {
        id: '5',
        text: 'Bake for 30 minutes on a parchment lined baking sheet.',
      },
      {
        id: '6',
        text: 'Remove from oven and stir well.',
      },
      {
        id: '7',
        text: 'Bake for 15 minutes and stir well.',
      },
      {
        id: '8',
        text: 'Repeat two times.',
      },
      {
        id: '9',
        text: 'Remove from oven to cool. Stir a few times so clumps don\'t form. Store in an air-tight container.',
      },
    ]
  }
];

export default cookbookData;
