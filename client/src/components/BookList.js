import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      name,
      id
    }
  }
`


function BookList(props) {
  function displayBooks(){
    if(props.data.loading){
      return (<div>Loading Books ...</div>)
    } else {
      return props.data.books.map(book => {
        return (
          <li key={book.id}>{book.name}</li>
        )
      })
    }
  }
  return (
    <div id= "main">
     <ul id="book-list">
        {displayBooks()}
     </ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
