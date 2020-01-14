export default {
  name: 'aboutDelItem',
  title: 'Blog Item',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'asset',
      type: 'array',
      title: 'Image or Video',
      options: {
        sortable: false,
      },
      validation: Rule => Rule.required().length(1),
      of: [
        {
          title: 'Image',
          type: 'image',
        },
        {
          title: 'Video URL',
          type: 'extendedUrl',
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'qpPortableText'
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      description: 'Please paste the full URL in. Internal links will be automatically shortened',
      of: [{type: 'qpLink'}],
    }
  ]
}
