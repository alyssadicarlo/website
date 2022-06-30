'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const github = document.querySelector('#github');
    const blog = document.querySelector('#blog');
    const deskKit = document.querySelector('#desk-kit');

    github.addEventListener('click', () => {
        window.location.href = "https://github.com/alyssadicarlo/";
    });

    blog.addEventListener('click', () => {
        window.location.href = "https://techlyss.com";
    });

    deskKit.addEventListener('click', () => {
        window.location.href = "https://kit.co/techlyss";
    });

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

})
