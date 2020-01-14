export default {
    name: 'yourVisit',
    type: 'document',
    title: 'Your Visit',
    __experimental_actions: [
        // 'create',
        'update',
        // 'delete',
        'publish'
    ],
    fields: [
        {
            title: 'Page title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Intro',
            name: 'content',
            type: 'qpPortableText'
        },
        {
            name: 'yourVisitSections',
            title: 'Visit Sections',
            type: 'array',
            of: [{type: 'visitSection'}],
            validation: Rule => Rule.min(0).max(20)
        }
    ]
}
