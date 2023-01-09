import "./Card.css"

function Card(props) {
    const cardElement = 'card ' + props.className;
    return (
        <div className={cardElement}>{props.children}</div>
    )
}

export default Card;