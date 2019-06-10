import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducres/expenses";
import filtersReducer from "../reducres/filters";

// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
