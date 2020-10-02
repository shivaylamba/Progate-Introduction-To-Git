var reviews = document.querySelectorAll(".review");
var circles = document.querySelectorAll(".circles");
var innerCircles = document.querySelectorAll(".inner_circle");
var review_wrapper = document.querySelector(".review_wrapper")
var curr = 1,
    access = true;

review_wrapper.addEventListener("mouseover", function () {
    access = false;
});

review_wrapper.addEventListener("mouseout", function () {
    access = false;
});

var slider = function () {
    if (access) {

        for (var x = 0; x < 3; x++) {
            reviews[x].style.display = "none";
            circles[x].classList.remove("active_review");
            innerCircles[x].classList.remove("active_inner_circle");
        }
        reviews[curr].style.display = "block";
        circles[curr].classList.add("active_review");
        innerCircles[curr].classList.add("active_inner_circle");
        curr++;
        if (curr > 2) {
            curr = 0;
        }
    }
}
window.setInterval(slider, 0);


/*for nav*/
var nav_button = document.querySelector(".navigation_button");
var nav_background = document.querySelector(".navigation_background");
var nav_nav = document.querySelector(".navigation_nav");
var nav_item = document.querySelector(".navigation_list");
var nav_span = document.querySelector(".navigation_icon");
var nav_btn = document.querySelector(".navigation_button");
nav_button.addEventListener("click", function () {

    nav_background.classList.toggle("nav_backgroundToggle");
    nav_nav.classList.toggle("nav_nav");

});

nav_item.addEventListener("click", function () {
    nav_background.classList.remove("nav_backgroundToggle");
    nav_nav.classList.remove("nav_nav");
    nav_span.classList.toggle("icon1");
});

nav_btn.addEventListener("click", function () {
    nav_span.classList.toggle("icon1");
});
