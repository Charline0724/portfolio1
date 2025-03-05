const TOP_BACK_BUTTON = document.querySelector('#top-btn');

window.addEventListener("scroll", function () {
    var nav = document.getElementById("myTopNav");
    if (window.scrollY > 50) {
        nav.classList.add("show");
    } else {
        nav.classList.remove("show");
    }
});


function displayMenu() {
    var x = document.getElementById("myTopNav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}
