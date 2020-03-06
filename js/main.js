document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.answers img');
    let lightbox = document.querySelector('.lightbox');
    let nameButton = document.querySelector('.name-button');
    let bio = document.querySelector('.bio');
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
