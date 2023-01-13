import { Expenses } from "./components/Expenses/Expenses.jsx";
import Items from "./components/Expenses/Expense.js";
import NewExpenses from "./components/NewExpense/NewExpenses.jsx";
import { useState } from 'react'


function App() {

  const [expenses, setExpenses] = useState(Items);

  const setExpenseHandler = (expense) => {
    setExpenses((exp) => {
      return [expense, ...exp];
    });
  }

  return (
    <div>
      <NewExpenses onAddExpense={setExpenseHandler} />
      <Expenses Items={expenses} />
    </div>
  );
}

export default App;
