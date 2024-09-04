// menu
const menuBtn=document.querySelector('#menu-logo');
const menu=document.querySelector('.menus');
const menuCloseBtn=document.querySelector('#menu-close');

menuBtn.addEventListener('click', () => {
    menu.classList.add('menu-active');
});

menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('menu-active');
});

// dark mode
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-theme');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

var typed = new Typed(".auto-type",{
    strings : ["Programmer", "Developer"],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true
})

var typed = new Typed(".auto-desk",{
    strings : ["Programmer", "Developer"],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true
})