 import Popup from "./Popup.js";

 class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPicture = this._currentPopup.querySelector('.popup__picture');
    this._popupImageCaption = this._currentPopup.querySelector('.popup__caption');
  }

  open (photoName, photoLink) {
    super.open();
    this._popupImageCaption.textContent = photoName;
    this._popupPicture.alt = photoName;
    this._popupPicture.src = photoLink;
    }
}

 export default PopupWithImage;