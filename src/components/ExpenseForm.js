import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? props.expense.amount.toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderfocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderfocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide a description and amount"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card pt-3">
          <div className="card-body">
            {this.state.error && (
              <p className="alert alert-danger" role="alert">
                {this.state.error}
              </p>
            )}
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onDescriptionChange}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="amount"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.onAmountChange}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder=" add note to your expense (optional)"
                  value={this.state.note}
                  onChange={this.onNoteChange}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <SingleDatePicker
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calenderfocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                />
              </div>

              <button className="btn btn-lg btn-primary float-right">
                Add Expense
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpenseForm;
