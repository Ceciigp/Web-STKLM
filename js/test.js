'use strict';
var icono = document.querySelector('fas.fa-bars');
var nav = document.querySelector('.mobile');
icono.addEventListener('click', function () {
    nav.classList.add('ver');
});
