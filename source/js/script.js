let header = document.getElementById('header');
let burgerMenu = header.querySelector('.burger__toggle');

burgerMenu.addEventListener('change', () => {
    header.classList.toggle('burger--open');
});


let beforeAfter = document.getElementById('before-after');
let beforeAfterSwitcher = beforeAfter.querySelector('.before-after__input');

beforeAfterSwitcher.addEventListener('change', () => {
    beforeAfter.classList.toggle('state--after');
});
