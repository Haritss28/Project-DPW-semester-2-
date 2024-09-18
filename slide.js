// untuk main cotent supaya bisa slide
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}

let slides = document.getElementsByClassName("main-item");
slides[0].style.backgroundImage = "url('img/gaya-1.gif')";

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("main-item");
  let textSlides = document.getElementsByClassName("content-text-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.backgroundImage = "url('img/gaya-" + slideIndex + ".gif')";
  slides[slideIndex - 1].style.display = "block";

  if (n > textSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = textSlides.length;
  }
  for (i = 0; i < textSlides.length; i++) {
    textSlides[i].style.display = "none";
  }
  textSlides[slideIndex - 1].style.display = "block";
}
