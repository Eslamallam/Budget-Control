import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

const CreateExpenses = props => {
  return (
    <div>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(startAddExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(CreateExpenses);
