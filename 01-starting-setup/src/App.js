import { Expenses } from "./components/Expenses/Expenses.jsx";
import Items from "./components/Expenses/Expense.js";


function App() {

  return (
    <div>
      <h1>Let's get started!</h1>
      <Expenses Items={Items} />
    </div>
  );
}

export default App;
