window.addEventListener('scroll', function () {
var nav = document.querySelector('nav');
var scrollPosition = window.scrollY;
    if (scrollPosition > 200) { 
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});



const slidecontainer = [...document.querySelectorAll('.slide-container')];
var slideIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}



function toggleLove(element) {
    element.classList.toggle("active");
}


