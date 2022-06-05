import { openPopup } from './index.js';

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._popupImage = document.querySelector('#popup-image');
    this._popupPicture = document.querySelector('.popup__picture');
    this._popupImageCaption = document.querySelector('.popup__caption');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _openPopupImage(picture) {
    openPopup(this._popupImage);
    this._popupPicture.src = this._link;
    this._popupPicture.setAttribute('alt', this._name);
    this._popupImageCaption.textContent = this._name;
    document.addEventListener('keydown', this._openPopup);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector('.element__image').setAttribute('alt', this._name);
    this._element.querySelector('.element__image').src = this._link;

    this._element
      .querySelector('.element__thrash')
      .addEventListener('click', () => {
        this._element.remove();
      });
      
    this._element
      .querySelector('.element__like')
      .addEventListener('click', () => {
        this._element
          .querySelector('.element__like')
          .classList.toggle('element__like_liked');
      });

    this._element
      .querySelector('.element__image')
      .addEventListener('click', () => {
        this._openPopupImage(this._element);
      });

    return this._element;
  }
}

export { Card };
