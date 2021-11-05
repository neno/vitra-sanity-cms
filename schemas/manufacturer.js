export default {
  name: 'manufacturer',
  title: 'Manufacturer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
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
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
  // preview: {
  //   select: {
  //     name: 'name',
  //     location: 'location',
  //   },
  //   prepare({ name, location }) {
  //     return {
  //       title: `${name}`,
  //       subtitle: `${location}`,
  //     };
  //   },
  // },
};
