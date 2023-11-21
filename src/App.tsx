import { useState } from "react";
import ExpenseList from "./expense-tracker/component/ExpenseList";
import ExpenseFilter from "./expense-tracker/component/ExpenseFilter";
import ExpenseForm from "./expense-tracker/component/ExpenseForm";

function App() {
  const [selectCategory, setSelectCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "test1", amount: 10, category: "Groceries" },
    { id: 2, description: "test2", amount: 20, category: "Groceries" },
    { id: 3, description: "test3", amount: 30, category: "Utilities" },
    { id: 4, description: "test4", amount: 40, category: "Entertainment" },
  ]);

  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
