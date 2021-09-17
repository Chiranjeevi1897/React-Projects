import "./NewExpense.css";
import ExpenseForm from "./ExpensesForm";
import React from "react";

const NewExpenses = (props) => {
  const NewExpenseData = (Handler) => {
    const Data = { Handler };
    props.newData(Data);
    console.log(Data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm DateItems={NewExpenseData} />
    </div>
  );
};
export default NewExpenses;
