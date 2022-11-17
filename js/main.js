//localStorage.setItem('style_theme', "white");
const theme = document.getElementById("theme");
if(localStorage.getItem('style_theme')=="white" ){
    theme.href = "css/style.css"
}else{
    theme.href = "css/style-dark.css";
}

//light <-> dark mod
const switchMode = document.getElementById("swichMode");
const switchMode2 = document.getElementById("swichMode2");

switchMode.onclick = function () {
    const theme = document.getElementById("theme");

    if(theme.getAttribute("href") == "css/style-dark.css"){
        theme.href = "css/style.css";
        localStorage.setItem('style_theme', "white");
    }
    else{
        theme.href = "css/style-dark.css";
        localStorage.setItem('style_theme', "black");
    }

}
switchMode2.onclick = function () {
    const theme = document.getElementById("theme");

    if(theme.getAttribute("href") == "css/style-dark.css"){
        theme.href = "css/style.css"
    }
    else{
        theme.href = "css/style-dark.css";
    }
}


//slides
const slides = document.querySelectorAll('.ergonomics__content');
const dots = document.querySelectorAll('.dot');
let index = 0;

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const activeSlide = n => {
    for(ergonomics__content of slides) {
        ergonomics__content.classList.remove('on');
    }
    slides[n].classList.add('on');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('on');
    }
    dots[n].classList.add('on');
}


dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index);
    })
})

//burger menu
const burger = document.querySelector('#burger'),
      menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
})
