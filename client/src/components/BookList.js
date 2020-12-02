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
function BookList() {
  return (
    <div id= "main">
     <ul id="book-list">
        <li>Book name</li>
     </ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
