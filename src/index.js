import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
//providers
import { CookiesProvider } from "react-cookie";

import { QueryClient, QueryClientProvider } from "react-query";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { RecoilRoot } from "recoil";
import algoliasearch from "algoliasearch/lite";

import { InstantSearch } from "react-instantsearch-dom";
const queryClient = new QueryClient();
const searchClient = algoliasearch(
  process.env.REACT_APP_APP_ID,
  process.env.REACT_APP_API_KEY
);
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RecoilRoot>
        <CookiesProvider>
          <InstantSearch searchClient={searchClient} indexName="dev_cartya">
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </InstantSearch>
        </CookiesProvider>
      </RecoilRoot>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
