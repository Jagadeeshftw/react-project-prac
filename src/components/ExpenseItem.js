import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem=(prams)=>{
  return (
    <div className="expense-item">
      <ExpenseDate date={prams.date} />
      <div className="expense-item__description">
        <h2>{prams.title}</h2>
        <div className="expense-item__price">{prams.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
