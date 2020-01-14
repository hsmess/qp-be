export default {
    name: 'news',
    type: 'document',
    title: 'News Article',
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
            title: 'Date',
            name: 'date',
            type: 'date'
        },
        {
            title: 'Primary Image',
            name: 'primaryImage',
            type: 'imageWithAltText'
        },
        {
            name: 'previewText',
            title: 'Content Preview',
            type: 'text'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'qpPortableText'
        },
        {
            name: 'newsSections',
            title: 'News Sections',
            type: 'array',
            of: [{type: 'newsSection'}],
            validation: Rule => Rule.min(0).max(8)
        }
    ]
}
