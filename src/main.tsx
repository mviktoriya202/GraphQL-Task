import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import FormContainer from "./containers/FormContainer";
import ReactDOM from "react-dom/client";

const client = new ApolloClient({
  uri: "http://152.228.215.94:83/api",
  cache: new InMemoryCache(),
});

const rootElement = ReactDOM.createRoot(document.getElementById("root")!);
rootElement.render(
  <ApolloProvider client={client}>
    <FormContainer />
  </ApolloProvider>,
);
