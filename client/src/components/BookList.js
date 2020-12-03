import {useState} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';

//components
import BookDetails from './BookDetails';

function BookList(props) {
  const [state, setState] = useState({
    selected: null
  })
  function displayBooks(){
    if(props.data.loading){
      return (<div>Loading Books ...</div>)
    } else {
      return props.data.books.map(book => {
        return (
          <li key={book.id} onClick = {e => setState({...state, selected: book.id})}>{book.name}</li>
        )
      })
    }
  }
  return (
    <div id= "main">
     <ul id="book-list">
        {displayBooks()}
     </ul>
     <BookDetails bookId = {state.selected} />
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
