import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        userTitle: '',
        userAmount: '',
        userDate: ''
    });

    const userTitleHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, userTitle: event.target.value }
        });
    }

    const userAmountHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, userAmount: event.target.value }
        });
    }

    const userDateHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, userDate: event.target.value }
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const data = {
            title: userInput.userTitle,
            amount: userInput.userAmount,
            date: userInput.userDate
        };

        props.onSaveExpense(data);

        setUserInput({
            userTitle: '',
            userAmount: '',
            userDate: ''
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={userInput.userTitle}
                        onChange={userTitleHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min='0.01' 
                        step='0.01' 
                        value={userInput.userAmount}
                        onChange={userAmountHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min='2023-01-01' 
                        value={userInput.userDate}
                        onChange={userDateHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button 
                    type='submit'>
                        Add Expense
                </button>
            </div>
        </form>
    )
};

export default ExpenseForm;