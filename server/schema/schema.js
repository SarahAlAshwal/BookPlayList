//The schema file purpose is to define types, their relations and requeries
const graphql = require('graphql'); 

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = graphql; 
const _ = require("lodash");

//dummy data
let books = [
  {name: "Name of the wind", genre: 'Fantasy', id: '1', authorId: '1'},
  {name: "The final Empire", genre: 'Fantasy', id: '2', authorId: '2'},
  {name: "The long earth", genre: 'Sci-Fi', id: '3', authorId: '3'},
  {name: "The hero of ages", genre: 'Fantasy', id: '4', authorId: '2'},
  {name: "The color of magic", genre: 'Fantasy', id: '5', authorId: '3'},
  {name: "The light fantastice", genre: 'Fantasy', id: '6', authorId: '3'}
];

let authors = [
  {name: 'Patrick', age: 44, id : '1'},
  {name: 'Brandon', age: 42, id : '2'},
  {name: 'Terry', age: 66, id : '3'},
];

const BookType = new GraphQLObjectType ({
  name: 'Book',
  fields: () => ({ // field is rapped inside a function to avoid AuthorType is not defined. the whole file is executed then what is inside the function
    id: {type: GraphQLID },
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent, args){
        return _.find(authors, parent.authorId )
      }
    }
  })
});

const AuthorType = new GraphQLObjectType ({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID },
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    books: { 
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return _.filter(books, {authorId : parent.id})
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // code to get data from db / other source
       return _.find(books,{id: args.id});
      }
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // code to get data from db / other source
       return _.find(authors,{id: args.id});
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList (AuthorType),
      resolve(parent, args) {
        return authors;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})