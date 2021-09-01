import $ from 'jquery';
$(document).ready(function() {
    const title = document.getElementById("title");
    const form = document.getElementById("form");
    const border = document.getElementById("title").parentElement;
    const observeItems = [title, form];

    const elemObservado = (entries) => {
        entries.forEach(elem => {
            if(elem.isIntersecting) {
                elem.target.classList.add("animation--appear");
                elem.target.classList.remove("disappear");
                border.classList.add("animation--appear2");
                border.classList.remove("disappear2");
            }
        });
    }

    const observador = new IntersectionObserver(elemObservado);
    for (const elem of observeItems) {
        observador.observe(elem)
    }
})