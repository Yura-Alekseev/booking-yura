let header = document.getElementById('header');
let burgerMenu = header.querySelector('.burger__toggle');

burgerMenu.addEventListener('change', () => {
    header.classList.toggle('burger--open');
});
