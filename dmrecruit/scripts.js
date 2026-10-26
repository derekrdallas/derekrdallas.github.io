// JavaScript Document

console.log("DM recruitment script locked and loaded");

/* start JS for gallery from W3school */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/* end JS for gallery from W3school */








/* just test java script

document.querySelector("p#test").innerText = "Melvin Likes Rush!";


const paragraph = document.getElementById("test");
paragraph.style.color = "yellow"; 


// Select all elements with the class name 'my-text-class'
const elements = document.querySelectorAll('.blue');

// Loop through each element and change its color to blue
elements.forEach(element => {
  element.style.color = 'yellow'; 
});

*/