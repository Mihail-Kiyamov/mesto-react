import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header></Header>
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}></Main>
          <Footer></Footer>
        </div>
        <PopupWithForm name='edit-profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={<> <label className="popup__form-field">
          <input className="popup__input popup__input_type_name" type="text" id="name-input" name="name"
            placeholder="Ваше имя" required minLength="2" maxLength="40" />
          <span className="popup__input-error name-input-error"></span>
        </label>
          <label className="popup__form-field">
            <input className="popup__input popup__input_type_about" type="text" id="about-input" name="about"
              placeholder="О вас" required minLength="2" maxLength="200" />
            <span className="popup__input-error about-input-error"></span>
          </label> </>}></PopupWithForm>
        <PopupWithForm name='add-element' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={<> <label className="popup__form-field">
          <input className="popup__input popup__input_type_mesto-name" type="text" id="mesto-name-input"
            name="mestoName" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="popup__input-error mesto-name-input-error"></span>
        </label>
          <label className="popup__form-field">
            <input className="popup__input popup__input_type_mesto-src" type="url" id="mesto-src-input"
              name="mestoSrc" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error mesto-src-input-error"></span>
          </label> </>}></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
        <PopupWithForm name='warning' title='Вы уверены?' isOpen={false} onClose={closeAllPopups}></PopupWithForm>
        <PopupWithForm name='change-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={<><label className="popup__form-field">
          <input className="popup__input popup__input_type_avatar-src" type="url" id="avatar-src-input"
            name="avatarSrc" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error avatar-src-input-error"></span>
        </label></>}></PopupWithForm>
      </div>

    </div>
  );
}

export default App;
