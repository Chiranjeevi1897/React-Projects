import "./Expense.css";
import "./ExpensesDate.css";
import React from "react";
function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const Year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-date ">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{day}</div>
        <div className="expense-date__day">{Year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
