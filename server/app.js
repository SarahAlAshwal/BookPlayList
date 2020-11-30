const express = require("express");
//middleware function that will be used to have the schema as an input
const {graphqlHTTP} = require("express-graphql"); 
const schema = require("./schema/schema");

const app = express(); 

app.use('/graphql', graphqlHTTP({
  schema

}));

app.listen(8000, ()=> {
  console.log("now listening for requests on port 8000");
})