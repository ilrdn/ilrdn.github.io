let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menuBtn");
let menuFlag = false;
let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let searchFlag = false;
menuBtn.onmouseover = function(event) {
    let target = event.target;
    target.style.backgroundImage = 'url(/img/icons/bars-h.png)';
};
menuBtn.onmouseout = function(event) {
    let target = event.target;
    target.style.backgroundImage = 'url(/img/icons/bars.png)';
};
searchBtn.onmouseover = function(event) {
    let target = event.target;
    target.style.backgroundImage = 'url(/img/icons/search-h.png)';
};
searchBtn.onmouseout = function(event) {
    let target = event.target;
    target.style.backgroundImage = 'url(/img/icons/search.png)';
};
function openMenu(){
    if (menuFlag == false){
        menu.style.display = "block";
        menuFlag = true;
        search.style.display = "none";
        searchFlag = false;
    } else {
        menu.style.display = "none";
        menuFlag = false;
    }
}   
function openSearch(){
    if (searchFlag == false){
        search.style.display = "flex";
        searchFlag = true;
        menu.style.display = "none";
        menuFlag = false;
    } else {
        search.style.display = "none";
        searchFlag = false;
    }
}
function closeMenu(){
    menu.style.display = "none";
    menuFlag = false;
}
var SwipesBest = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});  
var SwipesDealers = new Swiper('.dealers-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});      