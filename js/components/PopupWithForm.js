import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, currentFormData) {
        super(popupSelector);
        this._currentFormData = currentFormData;
        this._formData = this._popupSelector.querySelectorAll('.popup__input');
        this._formPopup = this._popupSelector.querySelector('.popup__form');
    }

    _getInputValues() {
        this._formDataValues = {};
        this._formData.forEach(item => {
            this._formDataValues[item.name] = item.value;
        })
        
        return this._formDataValues;

//     this._formValues = {};
//     this._inputList.forEach(input => {
//       this._formValues[input.name] = input.value;
//     })

//     return this._formValues;

    }

    setEventListeners(popup) {
        super.setEventListeners(popup);
        popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._currentFormData(this._getInputValues());
            this.close();
            })
    }

    close() {
        super.close();
        this._formPopup.reset();
    }
}
export default PopupWithForm


// import Popup from "./Popup.js";

// export default class PopupWithForm extends Popup {
//   constructor({ popupSelector, handleFormSubmit }) {
//     super(popupSelector);
//     this._handleFormSubmit = handleFormSubmit;
//     this._popupForm = this._popupSelector.querySelector('.popup__form');
//     this._inputList = this._popupForm.querySelectorAll('.form__input');
//   }

//   _getInputValues() {
//     this._formValues = {};
//     this._inputList.forEach(input => {
//       this._formValues[input.name] = input.value;
//     })

//     return this._formValues;
//   }

//   setEventListeners() {
//     this._popupForm.addEventListener('submit', (event) => {
//       event.preventDefault();
//       this._handleFormSubmit(this._getInputValues());
//       this.close();
//     })
//   }

//   close() {
//   super.close();
//   this._popupForm.reset();
//   }
// }