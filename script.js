const btn = document.querySelector('#login');
const welcome= document.querySelector ('.container h1');
const form = document.querySelector('.form');

btn.addEventListener('click', e =>{

e.preventDefault();

form.style.opacity = 0;
welcome.style.transform = 'translateY'
});

