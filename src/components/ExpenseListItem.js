import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  const date = moment(createdAt).format("MMMM D, YYYY");
  return (
    <div className="card pt-2">
      <div className="card-body">
        <Link to={`/edit/${id}`}>
          <h3>{description}</h3>
        </Link>
        {numeral(amount).format("$0,0.00")}
        <p className="card-text float-right">
          <small className="text-muted">{date}</small>
        </p>
      </div>
    </div>
  );
};

export default ExpenseListItem;
