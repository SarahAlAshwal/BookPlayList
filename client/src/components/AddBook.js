import {useState} from 'react';
import {graphql} from 'react-apollo';
import compose from 'lodash.flowright';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries';


function AddBooks (props) {

  const [state, setState] = useState({
    name: "",
    genre: "",
    authorId: ""

  })
  function displayAuthors(){
    if(props.getAuthorsQuery.loading) {
      return(<option disabled>Authors loading..</option>);
    } else {
      return props.getAuthorsQuery.authors.map(author => {
        return (<option key={author.id} value={author.id}>{author.name}</option>)
      })
    }
  }
  
  function submitForm(e){
    e.preventDefault(); //to prevent refreshing the page
    props.addBookMutation({
      variables: {
        name: state.name,
        genre: state.genre,
        authorId: state.authorId
      },
      refetchQueries: [{query: getBooksQuery}]
    });
  }
  return (
    <form id='add-book' onSubmit={submitForm}>
      <div className="field">
        <label>Book Name</label>
        <input type="text" onChange={e => setState({...state, name:e.target.value})}/>
      </div>
      <div className='field'>
        <label>Genre</label>
        <input type="text" onChange={e => setState({ ...state, genre:e.target.value})}/>
      </div>
      <div className="field">
        <label>Author</label>
        <select onChange={e => setState({ ...state, authorId:e.target.value})}>
          <option>Select Auhtor</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default compose(
  graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
  graphql(addBookMutation, {name: "addBookMutation"})
) (AddBooks);