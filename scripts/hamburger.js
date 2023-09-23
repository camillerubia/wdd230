const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const navWrapper = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    navWrapper.classList.toggle('open');
})