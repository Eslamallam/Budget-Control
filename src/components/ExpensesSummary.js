import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectTotalExpenses from "../selectors/totalExpenses";

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expensesWord = expensesCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal).format("$0,0.00");
  return (
    <div className="container">
      <h4 className="float-right p-3">
        Viewing <span className="badge badge-secondary">{expensesCount}</span>{" "}
        {expensesWord} totalling{" "}
        <span className="badge badge-warning">{formattedExpensesTotal}</span>{" "}
      </h4>
    </div>
  );
};

const mapStatetoProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectTotalExpenses(visibleExpenses)
  };
};

export default connect(mapStatetoProps)(ExpensesSummary);
