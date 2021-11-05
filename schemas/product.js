export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
      maxLength: 200,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'designer',
      title: 'Designer',
      type: 'reference',
      to: [{ type: 'designer' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'reference',
      to: [{ type: 'manufacturer' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt-Text',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description Text',
      type: 'blockContent',
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'yearFrom',
      title: 'Year from',
      type: 'number',
      validation: (Rule) => Rule.integer(),
    },
    {
      name: 'yearTo',
      title: 'Year to',
      type: 'number',
      validation: (Rule) => Rule.integer(),
    },
    {
      name: 'dating',
      title: 'Dating',
      type: 'string',
    },
    {
      name: 'designed',
      title: 'Designed',
      type: 'string',
    },
    {
      name: 'firstSeries',
      title: 'First series',
      type: 'string',
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
    },
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     published: 'published',
  //   },
  //   prepare({ title, published }) {
  //     return {
  //       title: `${title}`,
  //       subtitle: `${published ? 'Publiziert' : 'Entwurf'}`,
  //     };
  //   },
  // },
};
