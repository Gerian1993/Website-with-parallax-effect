let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

//!в чем отличие мужду margin-right and right
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value*0.5 + 'px';
    moon.style.left = value*0.4 + 'px';
    moon.style.top = value + 'px';
    mountains_behind.style.top = value * 0.3 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px'; 
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
 });

