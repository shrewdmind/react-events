import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card"

export function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem 
                title={props.Items[0].title}
                amount={props.Items[0].amount}
                date={props.Items[0].date}
            />
            <ExpenseItem 
                title={props.Items[1].title}
                amount={props.Items[1].amount}
                date={props.Items[1].date}
            />
            <ExpenseItem 
                title={props.Items[2].title}
                amount={props.Items[2].amount}
                date={props.Items[2].date}
            />
        </Card>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}