import React from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilter extends React.Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calenderFocused => {
    this.setState(() => ({ calenderFocused }));
  };

  render() {
    return (
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-4">
            <DateRangePicker
              startDateId=""
              endDateId=""
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-control"
              onChange={e => {
                if (e.target.value === "amount") {
                  this.props.dispatch(sortByAmount());
                } else {
                  this.props.dispatch(sortByDate());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                value={this.props.filters.text}
                onChange={e => {
                  this.props.dispatch(setTextFilter(e.target.value));
                }}
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
