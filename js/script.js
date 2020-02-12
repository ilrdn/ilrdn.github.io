let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menuBtn");
let menuFlag = false;
let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let searchFlag = false;
menuBtn.onmouseover = function(event) {
    let target = event.target;
    target.style.filter = 'invert(100%) sepia() saturate(10000%) hue-rotate(-49deg)';
};
menuBtn.onmouseout = function(event) {
    let target = event.target;
    target.style.filter = 'invert(100%)';
};
searchBtn.onmouseover = function(event) {
    let target = event.target;
    target.style.filter = 'invert(100%) sepia() saturate(10000%) hue-rotate(-49deg)';
};
searchBtn.onmouseout = function(event) {
    let target = event.target;
    target.style.filter = 'invert(100%)';
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