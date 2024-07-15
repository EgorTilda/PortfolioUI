window.onload = () => {
    const openMenuBtn = document.getElementById('open-menu-btn'),
          closeMenuBtn = document.getElementById('close-menu-btn'),
          menu = document.getElementById('menu'),
          menuLinks = document.querySelectorAll('.menu__link');
    openMenuBtn.addEventListener('click', () => {
        menu.classList.add('show');
    });
    closeMenuBtn.addEventListener('click', () => {
        menu.classList.remove('show');
    });
    menuLinks.forEach( (elem) => {
        elem.addEventListener('click', () => menu.classList.remove('show') );
    });
};