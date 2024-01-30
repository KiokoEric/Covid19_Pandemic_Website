let Scroll = document.querySelector(".Scroll");

window.addEventListener("scroll" , function() {
    if(window.pageYOffset < 100) {
        Scroll.classList.add("active");
    } else {
        Scroll.classList.remove("active")
    }
})

