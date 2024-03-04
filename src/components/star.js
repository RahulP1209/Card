export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.jpg" : "star-empty.jpg"
    const buttonLabel = props.isFilled ? "Unmark as favorite" : "Mark as favorite"
    
    return (
        <button
            onClick={props.handleClick}
            aria-label={buttonLabel}
            aria-pressed={props.isFilled}
            className="card--favorite-button"
        >
            <img
                src={require(`../images/${starIcon}`)}
                alt="star icon."
                className="card--favorite"
            />
        </button>
    )
}
