import ExpenseItems from "./components/ExpenseItems";

function App() {
  const prams = [
    {
      date: new Date(16, 7, 2021),
      title: "Phone",
      amount: "55k",
    },
    {
      date: new Date(15, 7, 2021),
      title: "Laptop",
      amount: "105k",
    },
    {
      date: new Date(14, 7, 2021),
      title: "AC",
      amount: "40K",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems
        date={prams[0].date}
        title={prams[0].title}
        amount={prams[0].amount}
      />
      <ExpenseItems
        date={prams[1].date}
        title={prams[1].title}
        amount={prams[1].amount}
      />
      <ExpenseItems
        date={prams[2].date}
        title={prams[2].title}
        amount={prams[2].amount}
      />
    </div>
  );
}

export default App;
