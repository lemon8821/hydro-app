"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
const menuBtn = document.querySelector('.navbar__button');
const menu = document.querySelector('.navbar:not(.navbar__item)');

menuBtn.addEventListener('click', e => {
  menu.style.width = '100%';
})

console.log(`Hello world!`);


const key = new Date().toISOString().slice(0, 10);
console.log(key);