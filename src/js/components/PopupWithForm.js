import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formPopup = this._currentPopup.querySelector('.popup__form');
    this._formData = this._formPopup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._formDataValues = {};
    this._formData.forEach((item) => {
      this._formDataValues[item.name] = item.value;
    });
    return this._formDataValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formPopup.reset();
  }
}

export default PopupWithForm;