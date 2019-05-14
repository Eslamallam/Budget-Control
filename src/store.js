//import { createStore } from "redux";
const { createStore, combineReducers } = require("redux");
const uuid = require("uuid");

//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer

const expensesReducerDeafultState = [];

const expensesReducer = (state = expensesReducerDeafultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expenses];
    case "REMOVE_EXPENSE":
      const newState = state.filter(({ id }) => {
        return id !== action.id;
      });
      return newState;
    default:
      return state;
  }
};

//Filters Reducer

const filtersReducerDeafultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDeafultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 74747 })
);
store.dispatch(removeExpense({ id: expenseOne.expenses.id }));

const demoState = {
  expenses: [
    {
      id: "asdasdasd",
      description: "January rent",
      note: "this was the last payment",
      amout: 500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortyBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
