export default {
    name: 'legal',
    type: 'document',
    title: 'Legal',
    __experimental_actions: [
        // 'create',
        'update',
        'delete',
        // 'publish'
    ],
    fields: [
        {
            title: 'Footer Title',
            name: 'footerTitle',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'In-Page Title',
            name: 'pageTitle',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Body Content',
            name: 'content',
            type: 'qpPortableText',
            validation: Rule => Rule.required()
        }
    ]
}
