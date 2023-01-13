import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css';
import { useState } from 'react';

const NewExpenses = (props) => {
    const [buttonState, setButtonState] = useState(false);

    const saveNewExpenseHandler = (newExpense) => {
        const exp = {
            ...newExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(exp);
    };


    const startEditingHandler = () => {
        setButtonState(true)
    }

    const stopEditingHandler = () => {
        setButtonState(false)
    }

    return (
        <div className='new-expense'>
            {!buttonState &&
            <button
                onClick={startEditingHandler}>
                    Add New Expense
            </button>}
            {
                buttonState &&
                <ExpenseForm 
                    onSaveExpense={saveNewExpenseHandler} 
                    onCancel={stopEditingHandler}
                />
            }
        </div>
    );
};

export default NewExpenses;