let leftArrow = document.getElementsByClassName('slider__arrow--left');
let rightArrow = document.getElementsByClassName('slider__arrow--right');
let slides = document.getElementsByClassName('slider__container');
let idx = 0;
showSlide(idx);       // show the first slide at the beginning

leftArrow[0].addEventListener("click", function() {
    showSlide(idx -= 1);
});

rightArrow[0].addEventListener("click", function() {
    showSlide(idx += 1);
});

function showSlide(n) {
    if (n >= slides.length)
        idx = 0;
    if (n < 0)
        idx = slides.length - 1;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[idx].style.display = "block";  
}

let search = document.querySelector('.menu__search');             // click to display search screen
let searchScreen = document.querySelector('.search-screen');
search.addEventListener("click", function() {
    searchScreen.classList.add("search-active");
})

let closeSearch = document.querySelector('.search-screen__close') // hide the search screen
closeSearch.addEventListener("click", function() {          
    searchScreen.classList.remove("search-active");
})

let submit = document.querySelectorAll('input[type="submit"]');         //prevent loading page again
submit.forEach(btn => btn.addEventListener("click", function(e) {
    e.preventDefault();
}))