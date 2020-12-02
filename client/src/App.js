import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

//Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1> My Book List App </h1>
        <BookList />
        <AddBook/>
      </div>
    </ApolloProvider>

  );
}

export default App;
