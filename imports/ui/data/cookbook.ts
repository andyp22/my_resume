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
  },
  {
    id: '5',
    title: 'Banana Bread',
    category: 'breakfast',
    makes: '2 loaves',
    image: '',
    description: 'Use up those brown bananas.',
    ingredients: [
      {
        id: '1',
        label: 'butter, unsalted',
        quantity: '0.5 cups',
      },
      {
        id: '2',
        label: 'sugar, granulated',
        quantity: '1 cup',
      },
      {
        id: '3',
        label: 'eggs',
        quantity: '2',
      },
      {
        id: '4',
        label: 'bananas',
        quantity: '3 or 4',
      },
      {
        id: '5',
        label: 'flour',
        quantity: '1.5 cups',
      },
      {
        id: '6',
        label: 'baking soda',
        quantity: '1 teaspoon',
      },
      {
        id: '7',
        label: 'salt, kosher',
        quantity: '0.5 teaspoons',
      },
      {
        id: '8',
        label: 'vanilla extract',
        quantity: '0.5 teaspoons',
      },
      {
        id: '9',
        label: 'cinnamon',
        quantity: '1 teaspoon',
      },
    ],
    directions: [
      {
        id: '1',
        text: 'Preheat oven to 350 degrees.',
      },
      {
        id: '2',
        text: 'Cream together butter, sugar, and salt.',
      },
      {
        id: '3',
        text: 'Add eggs and vanilla and mix well. Scrape the bowl. Add the bananas and mix well.',
      },
      {
        id: '4',
        text: 'Add the remaining dry ingredients and mix until just combined. Do not over mix.',
      },
      {
        id: '5',
        text: 'Bake in loaf pans for 50 to 60 minutes or until done.',
      },
    ]
  },
  {
    id: '6',
    title: 'Cut-out Cookies',
    category: 'sweets',
    makes: '2-3 dozen cookies',
    image: '',
    description: 'A good base cookie dough recipe for cut-out cookies. This is a short-bread type cookie dough so it could also be adapted to make a number of different flavored cookie doughs.',
    ingredients: [
      {
        id: '1',
        label: 'butter, unsalted',
        quantity: '0.66 cups',
      },
      {
        id: '2',
        label: 'sugar',
        quantity: '0.75 cups',
      },
      {
        id: '3',
        label: 'baking powder',
        quantity: '1 teaspoon',
      },
      {
        id: '4',
        label: 'salt, kosher',
        quantity: '0.25 teaspoons',
      },
      {
        id: '5',
        label: 'eggs',
        quantity: '1',
      },
      {
        id: '6',
        label: 'milk',
        quantity: '1 tablespoon',
      },
      {
        id: '7',
        label: 'vanilla extract',
        quantity: '1 teaspoon',
      },
      {
        id: '8',
        label: 'flour, all-purpose',
        quantity: '2 cups',
      },
    ],
    directions: [
      {
        id: '1',
        text: 'Cream together butter, sugar, baking powder, and salt.',
      },
      {
        id: '2',
        text: 'Combine all wet ingredients and mix well.',
      },
      {
        id: '3',
        text: 'Add wet ingredients to creamed butter mixture.',
      },
      {
        id: '4',
        text: 'Add flour and mix until just combined. Over mixing can cause the cookies to become tough.',
      },
      {
        id: '5',
        text: 'Chill for two hours.',
      },
      {
        id: '6',
        text: 'Roll out and cut into desired shapes.',
      },
      {
        id: '7',
        text: 'Bake for 7-10 minutes in a 375 degree oven.',
      },
    ]
  },
  {
    id: '7',
    title: 'Mexican Wedding Cookies',
    category: 'sweets',
    makes: '2 to 3 dozen',
    image: '',
    description: 'These are some really tasty cookies with a toasty pecan flavor.',
    ingredients: [
      {
        id: '1',
        label: 'butter, unsalted',
        quantity: '1 cup',
      },
      {
        id: '2',
        label: 'powdered sugar',
        quantity: '0.5 cups',
      },
      {
        id: '3',
        label: 'vanilla extract',
        quantity: '1 teaspoon',
      },
      {
        id: '4',
        label: 'flour, sifted',
        quantity: '2.25 cups',
      },
      {
        id: '5',
        label: 'salt, kosher',
        quantity: '0.25 teaspoons',
      },
      {
        id: '6',
        label: 'pecans, chopped',
        quantity: '0.75 cups',
      },
    ],
    directions: [
      {
        id: '1',
        text: 'Preheat oven to 400 degrees.',
      },
      {
        id: '2',
        text: 'Cream together butter and sugar.',
      },
      {
        id: '3',
        text: 'Add the vanilla.',
      },
      {
        id: '4',
        text: 'Combine the flour and salt and then add it to the butter mixture.',
      },
      {
        id: '5',
        text: 'When just combined add the pecans.',
      },
      {
        id: '6',
        text: 'Form into 1-inch balls and bake for about 10 minutes.',
      },
      {
        id: '7',
        text: 'Cool completely. Coat in powdered sugar.',
      },
    ]
  },
  {
    id: '8',
    title: 'Pie crust',
    category: 'sweets',
    makes: '2 crusts',
    image: '',
    description: 'A basic pie dough which can be used for both sweet and savory pies.',
    ingredients: [
      {
        id: '1',
        label: 'flour, all-purpose',
        quantity: '2 cups',
      },
      {
        id: '2',
        label: 'salt, kosher',
        quantity: '0.25 teaspoons',
      },
      {
        id: '3',
        label: 'water or milk, cold',
        quantity: '4 to 5 tablespooons',
      },
      {
        id: '4',
        label: 'butter, unsalted',
        quantity: '11 tablespoons',
      },
    ],
    directions: [
      {
        id: '1',
        text: 'Combine the flour and salt.',
      },
      {
        id: '2',
        text: 'Add the butter and cut together.',
      },
      {
        id: '3',
        text: 'Add enough liquid to just bind the dough together.',
      },
      {
        id: '4',
        text: 'Form a large patty, wrap in plastic wrap and refrigerate for several hours before rolling out.',
      },
    ]
  },
  {
    id: '9',
    title: 'Naan',
    category: 'specialty',
    makes: '8 pieces',
    image: '',
    description: 'Naan is a flat bread typically cooked in a tandoor oven. Very tasty on its own but also great as a side or wrap.',
    ingredients: [
      {
        id: '1',
        label: 'yeast',
        quantity: '0.125 ounces',
      },
      {
        id: '2',
        label: 'water, warm',
        quantity: '0.5 cups',
      },
      {
        id: '3',
        label: 'sugar',
        quantity: '0.125 cups',
      },
      {
        id: '4',
        label: 'milk',
        quantity: '1.5 tablespoons',
      },
      {
        id: '5',
        label: 'eggs, beaten',
        quantity: '1',
      },
      {
        id: '6',
        label: 'salt, kosher',
        quantity: '1 teaspoon',
      },
      {
        id: '7',
        label: 'flour, all-purpose',
        quantity: '2 cups',
      },
      {
        id: '8',
        label: 'garlic, minced',
        quantity: '1 teaspoon',
      },
      {
        id: '9',
        label: 'butter, melted',
        quantity: '0.125 cups',
      },
    ],
    directions: [
      {
        id: '1',
        text: 'Combine yeast and water. Let stand for 10 minutes.',
      },
      {
        id: '2',
        text: 'Add the remaining ingredients. Mix until combined and then knead for 6 to 8 minutes.',
      },
      {
        id: '3',
        text: 'Let rise for one hour or until doubled in size. Punch down and form into 1.5 ounce balls.',
      },
      {
        id: '4',
        text: 'Allow to proof for about 30 minutes or until double in size.',
      },
      {
        id: '5',
        text: 'Roll out into 5 to 6 inch flat rounds. Cook in a pan without any oil, flipping once. Cook about 2 to 3 minutes on each side or until slightly browned. Serve immediately.',
      },
    ]
  }
];

export default cookbookData;
