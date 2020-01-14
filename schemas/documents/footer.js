export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fieldsets: [
        {name: 'form', title: 'Form'}
    ],
    __experimental_actions: [
        'create',
        'update',
        // 'delete',
        'publish'
    ],
    fields: [
        {
            title: 'Opening message',
            name: 'openingMessage',
            type: 'string',
        },
        {
            title: 'Google maps URL',
            name: 'googleMapsUrl',
            type: 'url',
        }
    ]
}
