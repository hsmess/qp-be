export default {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',
    __experimental_actions: [
        // 'create',
        'update',
        // 'delete',
        'publish'
    ],
    fields: [
        {
            title: 'Tagline',
            description: 'Short intro text shown over the background.',
            name: 'overlayText',
            type: 'string',
        },
        {
            title: 'Overlay Text',
            description: 'Slightly longer description shown on homepage',
            name: 'overlayText2',
            type: 'qpPortableText',
        },
        {
            title: 'Background Video (optional)',
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
        }
    ]
}
