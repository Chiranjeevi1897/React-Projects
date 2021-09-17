import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [TitleInput, InputHandler] = useState("");
  const [AmountInput, cashHandler] = useState("");
  const [dateInput, DateHandler] = useState("");

  const TitleHandler = (event) => {
    InputHandler(event.target.value);
  };
  const AmountHandler = (event) => {
    cashHandler(event.target.value);
  };
  const TimeHandler = (event) => {
    DateHandler(event.target.value);
  };
  const DayHandler = (event) => {
    DateHandler(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    const DataHandler = {
      Title: TitleInput,
      amount: AmountInput,
      date: dateInput,
    };
    props.DateItems(DataHandler);
    console.log(DataHandler);
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" onChange={TitleHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input type="number" onChange={AmountHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input type="date" onChange={DayHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
