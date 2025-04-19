import "./Expense.css";
import "./ExpensesDate.css";
import React from "react";

function ExpenseItem({ id, title, amount, date, onDelete }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <div>
        <button onClick={deleteHandler} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
