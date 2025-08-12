let element = document.getElementById("id");

let elementByClassName = document.getElementsByClassName('.className');

let  elementBaTag = document.getElementsByTagName('div');

let elements = document.querySelectorAll('div');

element.classList.add('newClassName');

element.classList.remove('className');

let bool = element.classList.contains('newClassName');
if (bool) {
    console.log('yes')
}

element.innerHTML = '<button>My_Button</button>';

element.innerText = 'Моя кнопка';

element.setAttribute('src', '../src/img.png');

let atrButton = element.getAttribute('src');

element.removeAttribute('src');

element.addEventListener('click', (event) => {
    console.log(event);
});

element.removeEventListener('click', (event) => {
    console.log('клик удален');
});
