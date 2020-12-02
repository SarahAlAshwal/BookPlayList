import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors {
      name,
      id
    }
  }
`

function AddBooks (props) {
  function displayAuthors(){
    if(props.data.loading) {
      return(<option disabled>Authors loading..</option>);
    } else {
      return props.data.authors.map(author => {
        return (<option key={author.id} value={author.id}>{author.name}</option>)
      })
    }
  }
  return (
    <form id='add-book'>
      <div className="field">
        <label>Book Name</label>
        <input type="text"/>
      </div>
      <div className='field'>
        <label>Genre</label>
        <input type="text"/>
      </div>
      <div className="field">
        <label>Author</label>
        <select>
          <option>Select Auhtor</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default graphql(getAuthorsQuery)(AddBooks);