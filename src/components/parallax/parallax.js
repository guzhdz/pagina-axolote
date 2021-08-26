import './parallax.jsx';
import './_parallax.scss';
import $ from 'jquery';
 
$(document).ready(function() {
 
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let ajolote = document.getElementById('ajolote');
 
window.addEventListener('scroll', function(){
    let value = window.scrollY;

        text.style.top = 2 + value * -0.02  + '%';
        bird1.style.top = value * -0.3 + 'px';
        bird1.style.left = value * 0.6 + 'px';
        bird2.style.top = value * -0.2 + 'px';
        bird2.style.left = value * -1 + 'px';
        rocks.style.top = value * -0.12 + 'px';
        forest.style.top = value * 0.15 + 'px';
        ajolote.style.top = value * -0.8 + 'px';
        ajolote.style.left = value * -1 + 'px';
});

});
