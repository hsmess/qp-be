export default {
    name: 'newsPage',
    type: 'document',
    title: 'News',
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
        }
    ]
}
