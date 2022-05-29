class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector('#element')
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _openPopupImage(link, name) {
    const popupImage = document.querySelector('#popup-image');
    const popupPicture = document.querySelector('.popup__picture');
    const popupImageCaption = document.querySelector('.popup__caption');
    popupImage.classList.add('popup_opened');
    popupPicture.src = this._link;
    popupPicture.setAttribute('alt', this._name);
    popupImageCaption.textContent = this._name;
    document.addEventListener('keydown', (evt) => {
      if (evt.key == 'Escape') {
        this._closePopupImage();
      }
    });
  }

  _closePopupImage() {
    const popupImage = document.querySelector('#popup-image');
    popupImage.classList.remove('popup_opened');
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this._name;
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
        this._openPopupImage();
      });

    return this._element;
  }
}

export { Card };
