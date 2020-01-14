export default {
  name: 'qpPortableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ]
      },
      styles: [ {title: 'Normal', value: 'normal'}]
    }
  ]
}
