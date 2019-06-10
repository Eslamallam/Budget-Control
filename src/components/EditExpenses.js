import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpenses = props => {
  console.log(props);
  return (
    <div className="container">
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />

      <div className="text-center">
        <button
          onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }));
            props.history.push("/");
          }}
          className="float-center btn btn-sm btn-danger"
        >
          Remove{" "}
          <span>
            <i className="fa fa-trash" aria-hidden="true" />
          </span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpenses);
