function Card(props) {

    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <article className="element">
            <img className="element__image"
                src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <h2 className="element__name">{props.card.name}</h2>
            <button className="element__like-button" type="button"><p className="element__like-button-counter">{props.card.likes.length}</p></button>
            <button className="element__delete-button" type="button"></button>
        </article>
    );
}

export default Card;