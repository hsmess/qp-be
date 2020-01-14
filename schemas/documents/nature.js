export default {
    name: 'nature',
    type: 'document',
    title: 'Nature',
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
            title: 'Carousel video (optional)',
            description: 'Video will appear first in the image carousel',
            name: 'video',
            type: 'url'
        },
        {
            title: 'Intro',
            name: 'content',
            type: 'qpPortableText'
        },
        {
            title: 'Displayed Nature Items',
            description: 'All the nature items that you want to be displayed, in the correct order. Any others will still exist, but will not be linked',
            name: 'natureItems',
            type: 'array',
            of: [{
                title: 'Nature Item',
                type: 'reference',
                to: { type: 'natureItem' }
            }]
        },
    ]
}
