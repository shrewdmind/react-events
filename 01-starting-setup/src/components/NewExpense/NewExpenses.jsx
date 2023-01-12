import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css'

const NewExpenses = () => {
    const saveNewExpenseHandler = (newExpense) => {
        const expenseData = {
            ...newExpense
        };

        console.log(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm 
                onSaveExpense={saveNewExpenseHandler} 
            />
        </div>
    )
};

export default NewExpenses;