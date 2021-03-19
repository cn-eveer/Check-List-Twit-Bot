import { createStore, applyMiddleware, combineReducers } from "redux";
import { userAuth } from "./reducers";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export const history = createBrowserHistory();
export const rootReducers = combineReducers({
  router: connectRouter(history),
  userAuth: userAuth,
});

export const store = createStore(
  rootReducers,
  applyMiddleware(thunk, routerMiddleware(history))
);
