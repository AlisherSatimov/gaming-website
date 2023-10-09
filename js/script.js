window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector("body").classList.add("loaded");
    }, 2500);
});
