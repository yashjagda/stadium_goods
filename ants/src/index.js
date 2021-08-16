import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// https://cors-anywhere.herokuapp.com/ is added to troubleshoot No CORS policy error for the given URL
const client = new ApolloClient({
  uri: "https://cors-anywhere.herokuapp.com/https://sg-ants-server.herokuapp.com/graphql/",
  fetchOptions: {
    mode: "no-cors",
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
