import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpensesList = props => {
  return (
    <div className="container">
      {props.expenses.length > 0 ? (
        props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      ) : (
        <h2 className="badge badge-primary text-uppercase">
          There is no Expenses to show!
        </h2>
      )}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStatetoProps)(ExpensesList);
