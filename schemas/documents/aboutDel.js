export default {
    name: 'aboutDel',
    type: 'document',
    title: 'About Derek Robins',
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
            title: 'Carousel images',
            name: 'imageSlider',
            type: 'array',
            of: [{ type: 'imageWithAltText' }]
        },
        {
            title: 'Intro',
            name: 'content',
            type: 'qpPortableText'
        },
        {
            title: 'In The Bag',
            name: 'itb',
            type: 'aboutDelItem'
        },
        {
            title: 'Blog Entries',
            name: 'aboutItems',
            type: 'array',
            of: [
                {
                    title: 'Blog Entry',
                    type: 'reference',
                    to: [
                        {type: 'aboutDelItem'}
                    ]
                }
            ]
        },
    ]
}
