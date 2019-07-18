const express =  require('express');
const graphHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');

const {queryType} = require('./query.js');
const port = 3000;
const app = express();

/* app.get('/hello',(req, res) => {
    res.send('Hello');
    console.log('Endpoint hello');
}); */

// Define the Schema
const schema = new GraphQLSchema({query : queryType}); 
// query is where we specify the read only endpoints in a schema.
//Setup the nodejs GraphQL server
app.use('/graphql', graphHTTP({
    schema : schema,
    graphiql : true  //Web UI using which we can test the graphql endpoints
}));

app.listen(port);
console.log(`Server Running at localhost:${port}`);