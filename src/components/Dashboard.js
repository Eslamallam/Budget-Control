import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpensesSummary from "./ExpensesSummary";

const Dashboard = () => {
  return (
    <div>
      <ExpenseListFilter />
      <div className="row">
        <ExpensesSummary />
      </div>
      <div className="row pt-1">
        <ExpensesList />
      </div>
    </div>
  );
};

export default Dashboard;
