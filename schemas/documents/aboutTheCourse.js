export default {
    name: 'aboutTheCourse',
    type: 'document',
    title: 'About The Course',
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
            type: "string",
        },
        {
            title: 'Course Map',
            description: 'Shown at top of page.',
            name: 'primaryImage',
            type: "imageWithAltText"
        },
        {
            title: 'Primary Content',
            description: 'Primary content paragraph at top of page',
            name: 'aboutCopy',
            type: 'qpPortableText'
        }
        //3 boxes: Nature, Layouts, Link to Your visit
    ]
}
