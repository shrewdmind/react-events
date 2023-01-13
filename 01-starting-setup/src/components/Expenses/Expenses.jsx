import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter";
import { useState } from 'react';
import ExpensesChart from "./ExpensesChart";

export function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filterExpense = props.Items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear 
    });
  
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler} 
                />
                <ExpensesChart expenses={filterExpense}/>
                <ExpenseList 
                    items={filterExpense} 
                />
            </Card>
        </div>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}