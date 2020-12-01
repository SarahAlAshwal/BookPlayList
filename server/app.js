const express = require("express");
//middleware function that will be used to have the schema as an input
const {graphqlHTTP} = require("express-graphql"); 
const schema = require("./schema/schema");
const mongoose = require("mongoose");


const app = express(); 

mongoose.connect("mongodb+srv://Sarah:SarahAli@cluster0.bvzwq.mongodb.net/Book List?retryWrites=true&w=majority");
mongoose.connection.once('open', ()=> {
  console.log('connected to the database');
})


app.use('/graphql', graphqlHTTP({
  schema

}));

app.listen(8000, ()=> {
  console.log("now listening for requests on port 8000");
})