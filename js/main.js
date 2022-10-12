document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.answers img');
    let lightbox = document.querySelector('.lightbox');
    let nameButton = document.querySelector('.name-button');
    let bio = document.querySelector('footer');
    if (lightbox){
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(e){
            let url = e.target.getAttribute('src');
            console.log(url)
            lightbox.classList.add('active')
            lightbox.style.backgroundImage = `url(${url})`
        })
    }
    lightbox.addEventListener('click', function(){
        this.classList.remove('active')
    })
    }
    if (nameButton){

    nameButton.addEventListener('click', function(){
        bio.classList.toggle('expanded')
    })
    }
})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
