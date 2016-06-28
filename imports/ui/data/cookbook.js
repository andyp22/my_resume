/* eslint max-len: "off" */
/* eslint-env es6 */

export const cookbookData = [
  {
    content: {
      images: [
        {
          imageUrl: '/images/cookbook/dough1.jpg',
        },
        {
          imageUrl: '/images/cookbook/dough2.jpg',
        },
        {
          imageUrl: '/images/cookbook/dough3.jpg',
        },
        {
          imageUrl: '/images/cookbook/dough4.jpg',
        },
        {
          imageUrl: '/images/cookbook/dough5.jpg',
        },
        {
          imageUrl: '/images/cookbook/dough6.jpg',
        },
        {
          imageUrl: '/images/cookbook/dough7.jpg',
        },
      ],
    },
    templateName: 'ImageSection',
  },
  {
    templateName: 'rellaxTitle',
    content: {
      header: 'Savory Pie Dough',
      body: 'This recipe is the basis for pies and other other savory-crusted dishes.',
      speed: 8,
      class: 'rellax',
    },
  },
  {
    templateName: 'rellaxSteps',
    content: {
      steps: [
        {
          class: 'rellax step step1 blue-step',
          speed: 6,
          header: 'Ingredients',
          body: '<ul><li>10 oz unbleached, all-purpose flour</li><li>1 tsp baking powder</li><li>1 tsp salt</li><li>3 oz lard or unsalted butter, cut in 3/4-inch cubes</li><li>1 whole egg</li><li>8 oz water, cold</li></ul>',
        },
        {
          class: 'rellax step step2 blue-step',
          speed: 3,
          header: 'Mix your ingredients',
          body: '<p>Combine your dry ingredients in a bowl: flour, baking powder, and salt. Mix well and add the lard/butter cubes. Toss the cubes lightly so they are coated in the flour mixture.</p><p>In a separate container combine the water and egg and beat well.</p>',
        },
        {
          class: 'rellax step step3 blue-step',
          speed: 2,
          header: 'Combine the flour and lard',
          body: '<p>Using your finger-tips, rub the flour and butter cubes together in a back and forth motion, like Snidley Whiplash while thinking of a dastardly plan. Continue doing this until all of the lard has been incorporated into the flour. You will know you are done when the mixture resembles grated parmeasan cheese.</p>',
        },
        {
          class: 'rellax step step4 blue-step',
          speed: 1,
          body: '<p class="no-header">Another way to tell the flour and lard are properly mixed is if, when you squeeze some together in your hand, the mixture will hold its shape.</p>',
        },
        {
          class: 'rellax step step5 blue-step',
          speed: 1,
          header: 'Combine Wet and Dry',
          body: '<p>Make a well in the center of your flour/lard mix and pour in the egg/water mix.</p>',
        },
        {
          class: 'rellax step step6 blue-step',
          speed: 1,
          body: '<p class="no-header">Mix with your hands until the dough is just mixed and slightly tacky. Do not knead the dough.</p>',
        },
        {
          class: 'rellax step step7',
          speed: 1,
          header: 'Finish Up',
          body: '<p class="finisher">Gather the dough and form it into a ball or disc. Wrap it in plastic wrap and refrigerate for several hours before using.<p>',
        },
      ],
    },
  },
];
