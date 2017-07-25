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

/*
  {
    id: '',
    title: '',
    category: '',
    makes: '',
    image: '',
    description: '',
    ingredients: [
      {
        id: '',
        label: '',
        quantity: '',
      },
    ],
    directions: [
      {
        id: '',
        text: '',
      },
    ]
  }
*/

const cookbookData: IRecipe[] = [
  {
    id: '1',
    title: 'Granola',
    category: 'breakfast',
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
  },
  {
    id: '2',
    title: 'Peanut Brittle',
    category: 'sweets',
    makes: '3 cups',
    image: '',
    description: 'Peanut brittle is awesome!',
    ingredients: [
      {
        id: '9',
        label: 'white sugar, granulated',
        quantity: '2 cups',
      },
      {
        id: '10',
        label: 'water',
        quantity: '0.25 cups',
      },
      {
        id: '11',
        label: 'salted peanuts, shelled and skinned',
        quantity: '1 cup',
      },
      {
        id: '12',
        label: 'butter',
        quantity: '2 tablespoons',
      },
      {
        id: '13',
        label: 'baking soda',
        quantity: '1 teaspoon',
      },
    ],
    directions: [
      {
        id: '1',
        text: 'Combine sugar and water in a pot over medium heat. Cook until light brown.',
      },
      {
        id: '2',
        text: 'Remove from heat and stir in butter and baking soda. It should bubble a little bit.',
      },
      {
        id: '3',
        text: 'Stir in the peanuts quickly.',
      },
      {
        id: '4',
        text: 'Pour on a greased cookie sheet and spread evenly.',
      },
      {
        id: '5',
        text: 'Cool until hard and break into pieces.',
      },
    ]
  },
  {
    id: '3',
    title: 'Squash Gnocchi',
    category: 'sides',
    makes: '4 servings',
    image: '',
    description: 'Gnocchi are good.',
    ingredients: [
      {
        id: '14',
        label: 'winter squash',
        quantity: '1 pound',
      },
      {
        id: '15',
        label: 'potatoes, peeled',
        quantity: '12-14 ounces',
      },
      {
        id: '16',
        label: 'egg',
        quantity: '1',
      },
      {
        id: '17',
        label: 'kosher salt',
        quantity: '1 teaspoon',
      },
      {
        id: '18',
        label: 'flour',
        quantity: '1.75 cups or more',
      },
    ],
    directions: [
      {
        id: '1',
        text: 'Cook squash in a 400 degree oven til soft. Separately, cook potatoes until done in boiling water. Cool enough to handle.',
      },
      {
        id: '2',
        text: 'Puree squash and potatoes together until smooth.',
      },
      {
        id: '3',
        text: 'Add egg and salt. Mix well.',
      },
      {
        id: '4',
        text: 'In a bowl, add flour to squash mix and knead until smooth. More flour may be needed so the dough is not sticky.',
      },
      {
        id: '5',
        text: 'Roll into thin logs, cut, and shape.',
      },
      {
        id: '6',
        text: 'Cook in boiling water for 5-6 minutes, or until floating.',
      },
    ]
  },
  {
    id: '4',
    title: 'Ras el hanout (House Blend) Spice Mix',
    category: 'specialty',
    makes: 'half a cup',
    image: '',
    description: 'A great spice mix for everything.',
    ingredients: [
      {
        id: '19',
        label: 'cumin seed, ground',
        quantity: '3 teaspoons',
      },
      {
        id: '20',
        label: 'paprika, ground',
        quantity: '3 teaspoons',
      },
      {
        id: '21',
        label: 'cardamom, ground',
        quantity: '3 teaspoons',
      },
      {
        id: '22',
        label: 'cloves, ground',
        quantity: '3 teaspoons',
      },
      {
        id: '23',
        label: 'cinnamon, ground',
        quantity: '3 teaspoons',
      },
      {
        id: '24',
        label: 'black pepper, ground',
        quantity: '2 teaspoons',
      },
      {
        id: '25',
        label: 'turmeric, ground',
        quantity: '2 teaspoons',
      },
      {
        id: '26',
        label: 'fenugreek, ground',
        quantity: '2 teaspoons',
      },
      {
        id: '27',
        label: 'ginger, ground',
        quantity: '2 teaspoons',
      },
    ],
    directions: [
      {
        id: '1',
        text: 'Combine all and mix well.',
      },
      {
        id: '2',
        text: 'Store in air-tight containers until ready to use.',
      },
    ]
  }
];

export default cookbookData;
