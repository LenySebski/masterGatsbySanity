import { GiChiliPepper as icon } from 'react-icons/gi';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of the topping',
    },
    {
      name: 'vegetarian',
      title: 'Is it vege?',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'hot',
      title: 'Is it hot?',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
      hot: 'hot',
    },
    prepare: ({ name, vegetarian, hot }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''} 
      ${hot ? '🔥' : ''}`,
    }),
  },
};
