export default {
  name: 'designer',
  title: 'Designer',
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
      name: 'dating',
      title: 'Dating',
      type: 'string',
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
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
  ],
  // preview: {
  //   select: {
  //     name: 'name',
  //     dating: 'dating',
  //   },
  //   prepare({ name, dating }) {
  //     return {
  //       title: `${name}`,
  //       subtitle: `${dating}`,
  //     };
  //   },
  // },
};
