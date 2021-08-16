import "./App.css";

import Home from "./components/home.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery, gql } from "@apollo/client";

const ANTS_QUERY = gql`
  {
    ants {
      weight
      name
      color
      length
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(ANTS_QUERY);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  return (
    <div className="App container">
      <h1>Welcome</h1>
      <Home data={data} />
    </div>
  );
}

export default App;
