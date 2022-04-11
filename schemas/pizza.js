import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 100 },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in ISK',
      validation: (Rule) => Rule.min(800),
      inputComponent: PriceInput,
    },
    {
      name: 'toppings',
      title: 'Toppings',
      description: 'First 4 toppings will be listed by the pizza name',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'image',
      price: 'price',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ name, media, price, ...toppings }) => {
      const isVege = Object.values(toppings);
      console.log(isVege);

      //  preparing the view  of toppings by filtering out possible empty inputs in toppings array Boolean(undefined)===false
      const tops = Object.values(toppings).filter(Boolean);
      // presenting data as pizza name as a title, image, and toppings as a subtitle
      return {
        media,
        title: `${name}   -  ${price} ISK `,
        subtitle: tops.join(', '),
      };
    },
  },
};
