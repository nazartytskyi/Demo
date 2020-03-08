const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.nav-menu');
let isOpen = false;

hamburger.addEventListener('click', function(e) {
    
    if (isOpen) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }

    isOpen = !isOpen;
});

window.addEventListener('resize', function(e) {
    menu.style.display = '';
    isOpen = false;
})

const menSwitcher = document.querySelector('#switch-men');
const womenSwitcher = document.querySelector('#switch-women');

menSwitcher.addEventListener('click', function(e) {
    document.querySelector('.types.men').style.display = 'flex';
    document.querySelector('.types.women').style.display = 'none';
   
    womenSwitcher.style.background = 'transparent';
    womenSwitcher.style.color = '#BF2C65';
    womenSwitcher.querySelector('img').src = 'img/woman-switch-dark.png'
    
    menSwitcher.style.background = '#2D9CDB';
    menSwitcher.style.color = 'white';
    menSwitcher.querySelector('img').src = 'img/men-switch-white.png'

});

womenSwitcher.addEventListener('click', function(e) {
    document.querySelector('.types.men').style.display = 'none';
    document.querySelector('.types.women').style.display = 'flex';
  
    womenSwitcher.style.background = '#BF2C65';
    womenSwitcher.style.color = 'white';
    womenSwitcher.querySelector('img').src = 'img/woman-switch-white.png'
   
    menSwitcher.style.background = 'transparent';
    menSwitcher.style.color = '#2D9CDB';
    menSwitcher.querySelector('img').src = 'img/men-switch-dark.png'
});