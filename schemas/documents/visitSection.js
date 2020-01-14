export default {
  name: 'visitSection',
  title: 'Visit Section',
  type: 'document',
  fields: [
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content Preview',
      type: 'qpPortableText'
    },
    {
      name: 'mapLocation',
      title: 'Map Location',
      description: 'If toggled, this will show the location of QP on an interractive map instead of the image',
      type: 'boolean'
    },
    {
      name: 'asset',
      type: 'array',
      title: 'Image or Video',
      description: 'Paste in the full video URL. Video will appear in its native player (youtube / vimeo) with controls. If using Vimeo, choose which controls are visible in the vimeo.com settings for each video.',
      options: {
        sortable: false,
      },
      validation: Rule => Rule.min(0).max(1),
      of: [
        {
          title: 'Image',
          type: 'image',
        },
        {
          title: 'Video URL',
          type: 'extendedUrl',
        }
      ],
    },
    {
      title: 'Image / Video Caption',
      name: 'caption',
      type: 'string'
    },
  ]
}
