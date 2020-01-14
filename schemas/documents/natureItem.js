export default {
    name: 'natureItem',
    type: 'document',
    title: 'Nature Items',
    __experimental_actions: [
        'create',
        'update',
        'delete',
        'publish'
    ],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.min(10).max(80)
        },
        {
            title: 'Primary Image',
            name: 'primaryImage',
            type: 'imageWithAltText'
        },
        {
            name: 'content',
            title: 'Content Preview',
            type: 'qpPortableText'
        },
        {
            name: 'findOutMoreLink',
            title: 'Find out more link',
            type: 'url'
        },
        {
            name: 'natureSections',
            title: 'Nature Sections',
            type: 'array',
            of: [{type: 'natureSection'}],
            validation: Rule => Rule.min(0).max(20)
        }
    ]
}
