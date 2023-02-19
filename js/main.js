let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let slides = document.querySelectorAll(".slide-container");
let index = 0;


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}
function prev() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}

document.querySelectorAll(".featured-image1").forEach(image_1 => {
    image_1.addEventListener("click", () => {
        var src = image_1.getAttribute('src');
        document.querySelector(".big-image1").src = src;
    });
});

document.querySelectorAll(".featured-image2").forEach(image_2 => {
    image_2.addEventListener("click", () => {
        var src = image_2.getAttribute('src');
        document.querySelector(".big-image2").src = src;
    });
});

document.querySelectorAll(".featured-image3").forEach(image_3 => {
    image_3.addEventListener("click", () => {
        var src = image_3.getAttribute('src');
        document.querySelector(".big-image3").src = src;
    });
});




