class Popup {
  constructor(popupSelector) {
    this._currentPopup = document.querySelector(popupSelector);
    this._closeButton = this._currentPopup.querySelector('.popup__close');
    this._closeByEscape = this._handleEscClose.bind(this);
  }

  open() {
    this._currentPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeByEscape);
  }

  close() {
    this._currentPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeByEscape);
  }

  _handleEscClose(evt) {
    if (evt.key == 'Escape') {
      this.close();
    }
  }

  setEventListeners(popup) {
    this._currentPopup.addEventListener('mousedown', (evt) => {
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