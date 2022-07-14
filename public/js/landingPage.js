window.onload = function() {
    slideSlider();
    cardSlider();
};
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
var slideImg = document.getElementById("slideImg");
var cardImg = document.getElementById("cardImg");

const sliderImages = [
    "/assets/bg1.jpg",
    "/assets/bg2.jpg",
    "/assets/bg3.jpg",

]
const cardImages = [

    "/assets/card1.png",
    "/assets/card2.png",
    "/assets/card3.png",

]


var i = 0;
var j = 0;

function slideSlider() {
    if (i > sliderImages.length - 1) {
        i = 0;
    }

    slideImg.src = sliderImages[i];

    i++;

    setTimeout('slideSlider()', 3000);
}

function cardSlider() {
    if (j > cardImages.length - 1) {
        j = 0;
    }
    cardImg.src = cardImages[j];
    j++;
    setTimeout('cardSlider()', 3000);
}