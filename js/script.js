const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY >60)
});   

let menu = document.querySelector('#menu-icon');
let navba = document.querySelector('.navba');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navba.classList.toggle('open');
};
//javascript for video slider navigation
const  btns = document.querySelectorAll(".nav-btn");
const  slides = document.querySelectorAll(".video-slide");
const  contents = document.querySelectorAll(".content-home");

var sliderNav = function(auto){
btns.forEach((btn) => {
     btn.classList.remove("active")
    });
    
slides.forEach((slide) => {
    slide.classList.remove("active")  
    });   

contents.forEach((content) => {
    content.classList.remove("active")  
    });   
    
    btns[auto].classList.add("active");
    slides[auto].classList.add("active");
    contents[auto].classList.add("active");
}
btns.forEach((btn, i) =>{
    btn.addEventListener("click", () =>{
        sliderNav(i);
    });
})

//slides 
function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active'); 
};

function toggleClip(){
    const clip = document.querySelector('.clip');
    const video = document.querySelector('video');
    video.pause();
    clip.classList.toggle('active'); 
}; 

 //trekking
function changeBg(bg, title) {  
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("../images/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
   

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
//biking
function changepg(pg, title) {  
    const bannel = document.querySelector('.bannel');
    const contents = document.querySelectorAll('.content');
    bannel.style.background = `url("./images/${pg}")`;
    bannel.style.backgroundSize = 'cover';
    bannel.style.backgroundPosition = 'center';
   

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}