const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull
} = require('graphql')


const AttribType = new GraphQLObjectType({
    name: 'attrib',
    fields: {},
});


module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: () => ({
            _id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for _id
                resolve: () => null,
            },
            address: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for address
                resolve: () => null,
            },
            attrib: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttribType),
                // TODO: Implement resolver for attrib
                resolve: () => null,
            },
            business_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for business_id
                resolve: () => null,
            },
            category: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for category
                resolve: () => null,
            },
            categoryid: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for categoryid
                resolve: () => null,
            },
            city: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for city
                resolve: () => null,
            },
            country: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for country
                resolve: () => null,
            },
            createdAt: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for createdAt
                resolve: () => null,
            },
            description: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for description
                resolve: () => null,
            },
            email: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for email
                resolve: () => null,
            },
            full_address: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for full_address
                resolve: () => null,
            },
            img_url: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for img_url
                resolve: () => null,
            },
            latitude: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for latitude
                resolve: () => null,
            },
            longitude: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for longitude
                resolve: () => null,
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
                resolve: () => null,
            },
            neighborhoods: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for neighborhoods
                resolve: () => null,
            },
            objectId: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for objectId
                resolve: () => null,
            },
            open: {
                description: 'enter your description',
                type: GraphQLBoolean,
                // TODO: Implement resolver for open
                resolve: () => null,
            },
            review_count: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for review_count
                resolve: () => null,
            },
            stars: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for stars
                resolve: () => null,
            },
            telephone: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for telephone
                resolve: () => null,
            },
            type: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for type
                resolve: () => null,
            },
            url: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for url
                resolve: () => null,
            }
        })
    })
})