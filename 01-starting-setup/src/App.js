import { Expenses } from "./components/Expenses/Expenses.jsx";
import Items from "./components/Expenses/Expense.js";
import NewExpense from './components/NewExpense/NewExpense.js';
import NewExpenses from "./components/NewExpense/NewExpenses.jsx";


function App() {

  return (
    <div>
      <NewExpenses Items={NewExpense} />
      <Expenses Items={Items} />
    </div>
  );
}

export default App;
