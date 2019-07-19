//import { GraphQLObjectType, GraphQLString } from 'graphql';
const { GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql');
const _ = require('lodash');

let {movies} = require('./data.js');
let {directors} = require('./data.js');
const {movieType} = require('./types.js')
//Define the Query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,//endpoint has return type as string
            resolve: function () {
                return "Hello World";
            }
        },
        movie : {
            type : movieType,//custom return type which we have configured in types.js file
            args : {
                id : {type: GraphQLInt} // integer type input `id`
            },
            resolve : function (source, args) {
                return _.find(movies,{id: args.id});
            }
        },
        director : {
            type: directorType,
            args : {
                id: { type : GraphQLInt }
            },
            resolve : function (source, args) {
                return _.find(directors, { id : args.id } );
            }
        }
    }
});


exports.queryType = queryType;