import { useState } from "react";
import ExpenseList from "./expense-tracker/compenent/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "test1", amount: 10, category: "Test" },
    { id: 2, description: "test2", amount: 20, category: "Test" },
    { id: 3, description: "test3", amount: 30, category: "Test" },
    { id: 4, description: "test4", amount: 40, category: "Test" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
