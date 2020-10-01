$(function() { //remove fade-out from class after page has loaded
  $("body").removeClass("fade-out");
})


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//next previous controls
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

//thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var thumbnails = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  //wrap around ends
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  //reset slides and thumbnails
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }

  //display
  slides[slideIndex-1].style.display = "block";
  thumbnails[slideIndex-1].className +=" active";
  captionText.innerHTML = thumbnails[slideIndex-1].alt;
}