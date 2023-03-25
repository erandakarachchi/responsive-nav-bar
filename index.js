const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list');
const menuButtonIcon = document.getElementById('menu-button-icon');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('show-menu');
    menuButtonIcon.classList.toggle('fa-bars');
    menuButtonIcon.classList.toggle('fa-xmark');
});
