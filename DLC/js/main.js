let slides = document.querySelectorAll('.slider-container');
let index = 0;
// next function
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) %slides.length;
    slides[index].classList.add('active')

}
// previous function
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length ) % slides.length;
    slides[index].classList.add('active')

}
// auto-play
setInterval(next, 4000); // slidesChange every 4 sec
