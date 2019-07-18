const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString,
} = require('graphql');

// Define Movie Type
movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLID }

    }
});

exports.movieType = movieType;