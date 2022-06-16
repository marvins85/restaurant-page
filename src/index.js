import {component, menu, contact} from './first';

let tab1 = document.querySelector('.tab .tab1');
tab1.addEventListener('click', function(){
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');
    const home = document.getElementById('home');
    home.style.display = 'block';
    menu.style.display = 'none';
    contact.style.display = 'none';
});

let tab2 = document.querySelector('.tab .tab2');
tab2.addEventListener('click', function(){
    const home = document.getElementById('home');
    const contact = document.getElementById('contact');
    const menu = document.getElementById('menu');
    menu.style.display = 'block';
    home.style.display = 'none';
    contact.style.display = 'none';
});

let tab3 = document.querySelector('.tab .tab3');
tab3.addEventListener('click', function(){
    const menu = document.getElementById('menu');
    const home = document.getElementById('home');
    const contact = document.getElementById('contact');
    contact.style.display = 'block';
    menu.style.display = 'none';
    home.style.display = 'none';
});

