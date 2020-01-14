export default {
    name: 'fourzerofour',
    type: 'document',
    title: '404',
    __experimental_actions: [
        'create',
        'update',
        'delete',
        'publish'
    ],
    fields: [
        {
            title: 'Page Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Subtitle',
            name: 'pageTitle',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Content Paragraph',
            name: 'content',
            type: 'qpPortableText',
            validation: Rule => Rule.required()
        },
        {
            title: 'Call To Action',
            name: 'link',
            type: 'qpLink'
        },
    ]
}
