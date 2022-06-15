class Popup {
    constructor(popupSelector) {
      this._popupSelector = document.querySelector(popupSelector);
      this._closeByEscape  = this._handleEscClose.bind(this);
    }

open() {
  this._popupSelector.classList.add('popup_opened');
  document.addEventListener('keydown', this._closeByEscape);
}

close() {
  // const openedPopup = document.querySelector('.popup_opened');
  this._popupSelector.classList.remove('popup_opened');
  document.removeEventListener('keydown', this._closeByEscape);
}

_handleEscClose(evt) {
  if (evt.key == 'Escape') {
    this.close();
  }
}

setEventListeners(popup) {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
}
}
export default Popup;