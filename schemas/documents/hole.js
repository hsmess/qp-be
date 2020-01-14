export default {
  name: 'hole',
  title: 'Hole',
  type: 'document',
  fields: [
    {
      title: 'Hole Name',
      name: 'title',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content Preview',
      type: 'qpPortableText'
    },
    {
      title: 'Carousel images',
      name: 'imageSlider',
      type: 'array',
      of: [{ type: 'imageWithAltText' }]
    },
    {
      title: 'Ace List',
      name: 'aceList',
      type: 'array',
      of: [{ type: 'ace' }]
    },
  ]
}
