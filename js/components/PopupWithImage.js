import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageCaption = document.querySelector('.popup__caption');
        this._popupPicture = document.querySelector('.popup__picture');
    }


    open() {
        super.open({ name, link });
        this._popupImageCaption.textContent = name;
        this._popupImageCaption.alt = name;
        this._popupPicture.src = link;
    }
}
export default PopupWithImage;