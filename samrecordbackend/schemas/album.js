export default {
    name: 'album',
    title: 'Album',
    type: 'document',
    fields: [
        {
            name: 'albumName',
            title: 'Album Name',
            type: 'string'
        },
        {
            name: 'artist',
            title: 'Artist',
            type: 'reference',
            to: {type: 'artist'}
        },
        {
            name: 'albumArt',
            title: 'Album Art',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}]
        }
    ]
}