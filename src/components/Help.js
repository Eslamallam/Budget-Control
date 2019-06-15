import React from "react";
import expenseImg from "../images/expenses.png";

const Help = () => {
  return (
    <div className="row">
      <div className="col col-lg-6">
        <div className="container pt-5 ">
          <h3 className="pd-3 text-uppercase">
            <mark>Expensify</mark> App features !!
          </h3>
          <ul className="pt-4">
            <li>
              <h6>
                Add your daily expesnes to calculate how much did you spent per
                day.
              </h6>
            </li>
            <li>
              <h6>Search for an expense within two dates or a single date.</h6>
            </li>
            <li>
              <h6>Search for a specific expense by name.</h6>
            </li>
            <li>
              <h6>Filter expenses by date or amount.</h6>
            </li>
          </ul>
        </div>
      </div>
      <div className="col col-lg-6">
        <div className="container">
          <img src={expenseImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Help;
