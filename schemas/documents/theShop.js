export default {
    name: 'theShop',
    type: 'document',
    title: 'The Shop',
    __experimental_actions: [
        // 'create',
        'update',
        // 'delete',
        'publish'
    ],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Video',
            description: 'Full URL of a video on Vimeo. Leave blank to use fading images below instead.',
            name: 'backgroundVideoUrl',
            type: 'url',
        },
        {
            title: 'Auto-fading background images',
            description: 'Shown in order as the background. Overridden by entering a video above.',
            name: 'imageSlider',
            type: "array",
            of: [{type: "imageWithAltText" }]
        },
        {
            title: 'Content',
            description: 'Page Content',
            name: 'content',
            type: 'qpPortableText'
        },
        {
            title: 'Pricing Content',
            name: 'pricingContent',
            type: 'qpPortableText'
        },
        {
            title: 'Stock Pricing',
            name: 'pricing',
            type: 'table'
        },
    ]
}
