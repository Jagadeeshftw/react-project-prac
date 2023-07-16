const ExpenseDate = (prams) => {
    const month = prams.date.toLocaleString("en-US", { month: "long" });
    const day = prams.date.toLocaleString("en-US", { day: "2-digit" });
    const year = prams.date.getFullYear();
    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    );
}
export default ExpenseDate;