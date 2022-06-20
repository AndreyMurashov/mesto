class Card {
   constructor({ data, handleCardClick }, cardSelector) {
     this._name = data.photoName;
     this._link = data.photoLink;
     this._cardSelector = cardSelector;
     this._handleCardClick = handleCardClick;
     this._element = this._getTemplate();
     this._elementName = this._element.querySelector('.element__name');
     this._elementImage = this._element.querySelector('.element__image');
     this._elementLike = this._element.querySelector('.element__like');
     this._elementThrash = this._element.querySelector('.element__thrash');
   }

_getTemplate() {
  const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

  return cardElement;
}

_removeElement() {
  this._element.remove();
}

_likeElement() {
  this._elementLike.classList.toggle('element__like_liked');
}

_setEventListeners() {
    this._elementThrash.addEventListener('click', () => {this._removeElement()});

    this._elementLike.addEventListener('click', () => {this._likeElement()});

  this._elementImage.addEventListener('click', () => {
    this._handleCardClick(this._name, this._link);
  })
}

generateCard() {
     this._elementName.textContent = this._name;
     this._elementImage.setAttribute('alt', this._name);
     this._elementImage.src = this._link;
     this._setEventListeners();

  return this._element;
}
}

 export default Card;