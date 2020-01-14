export default {
    name: 'courseLayout',
    type: 'document',
    title: 'Course Layouts',
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
            title: 'Course Map',
            name: 'courseMap',
            type: 'imageWithAltText'
        },
        {
            name: 'content',
            title: 'Content Preview',
            type: 'qpPortableText'
        },
        {
            name: 'holes',
            title: 'Holes',
            type: 'array',
            of: [{type: 'hole'}],
            validation: Rule => Rule.min(0).max(20)
        }
    ]
}
