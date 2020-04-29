var imageContainer = document.querySelector(".before-after-slider__wrapper");
var image = imageContainer.querySelector(".before-after-slider__image--after");
var range = document.querySelector(".before-after-slider__input");

range.oninput = function() {
    imageContainer.style.width = this.value + "%";
};
