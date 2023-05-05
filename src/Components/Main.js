import { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getProfileInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__circle-for-image" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((cardObj) => (<Card key={cardObj._id} card={cardObj} onCardClick={props.onCardClick}></Card>))}
            </section>
        </main>
    );
}

export default Main;