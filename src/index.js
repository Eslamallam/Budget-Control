import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./routers/AppRouter";
import "../src/firebase/firebase";

const store = configureStore();

const state = store.getState();

const getVisibleData = getVisibleExpenses(state.expenses, state.filters);

console.log(getVisibleData);

const MyApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));

serviceWorker.unregister();
