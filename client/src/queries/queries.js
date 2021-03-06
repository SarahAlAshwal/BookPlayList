import {gql} from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      name,
      id
    }
  }
`

const getAuthorsQuery = gql`
  {
    authors {
      name,
      id
    }
  }
`

//$ to indicate a query variable, ! to tell that the value should not be a Null
const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) { 
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name,
      id
    }
  }
`

const getBookQuery = gql`
  query($id: ID){
    book(id: $id){
      id
      name
      genre
      author {
        name
        age
        books {
          name 
          id
        }
      }
    }
  }
`

export {getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery}