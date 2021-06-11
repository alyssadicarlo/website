'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const github = document.querySelector('#github');
    const linkedin = document.querySelector('#linkedin');
    const email = document.querySelector('#email');
    const resume = document.querySelector('#resume');

    github.addEventListener('click', () => {
        window.location.href = "https://github.com/alyssadicarlo/";
    });

    linkedin.addEventListener('click', () => {
        window.location.href = "https://www.linkedin.com/in/alyssa-dicarlo/";
    });

    email.addEventListener('click', () => {
        window.location.href = "mailto:alyssa.dicarlo@gmail.com";
    });

    resume.addEventListener('click', () => {
        window.location.href = "assets/resume.pdf";
    });

})