const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = require('graphql');
const _ =  require('lodash');
let {movies} = require('./data.js');

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

directorType = new GraphQLObjectType({
    name : 'Director',
    fields : {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: new GraphQLList(movieType),
            resolve(source, args) {
                return _.filter(movies, { directorId: source.id });
            }

        }
    }
});
exports.movieType = movieType;