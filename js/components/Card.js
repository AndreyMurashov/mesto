// import { openPopup } from '../pages/index.js';

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._popupImage = document.querySelector('#popup-image');
    this._popupPicture = document.querySelector('.popup__picture');
    this._popupImageCaption = document.querySelector('.popup__caption');

    this._element = this._getTemplate();
    this._elementName = this._element.querySelector('.element__name');
    this._elementImage = this._element.querySelector('.element__image');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementThrash = this._element.querySelector('.element__thrash');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _openPopupImage() {
    openPopup(this._popupImage);
    this._popupPicture.src = this._link;
    this._popupPicture.setAttribute('alt', this._name);
    this._popupImageCaption.textContent = this._name;
  }

  _setEventListeners() {
    this._elementThrash.addEventListener('click', () => {
      this._element.remove();
    });

    this._elementLike.addEventListener('click', () => {
      this._elementLike.classList.toggle('element__like_liked');
    });

    this._elementImage.addEventListener('click', () => {
      this._openPopupImage(this._element);
    });
  }

  generateCard() {
    this._elementName.textContent = this._name;
    this._elementImage.setAttribute('alt', this._name);
    this._elementImage.src = this._link;
    
    this._setEventListeners();

    return this._element;
  }
}

export { Card };
