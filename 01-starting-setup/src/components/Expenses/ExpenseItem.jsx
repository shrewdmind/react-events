import { useState } from 'react';

import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate.jsx';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Title changed');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate 
                date={props.date}
            />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;