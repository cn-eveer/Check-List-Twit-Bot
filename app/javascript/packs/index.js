import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, history } from "./components/redux/store";
import { ConnectedRouter } from "connected-react-router";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.body.appendChild(document.createElement("root"))
);

reportWebVitals();
