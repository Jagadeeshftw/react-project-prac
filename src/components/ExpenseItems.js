import "./ExpenseItems.css";

function ExpenseItems(prams) {
  const month = prams.date.toLocaleString("en-US", { month: "long" });
  const day = prams.date.toLocaleString("en-US", { day: "2-digit" });
  const year = prams.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{prams.title}</h2>
        <div className="expense-item__price">{prams.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
