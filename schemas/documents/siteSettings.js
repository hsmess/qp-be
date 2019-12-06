export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe the site for search engines and social media.'
    },
    {
      name: 'siteURL',
      type: 'url',
      title: 'Site URL',
      description: 'For OpenGraph'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Site Image',
      description: 'For OpenGraph'
    },
  ]
}
