var login = document.querySelector(".login");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close");

login.addEventListener("click", function () {
    popup.style.display = "block";
})
close.addEventListener("click", function () {
    popup.style.display = "none";

})
window.addEventListener("keydown", function (event) {
    if (event.which == 27) {
        popup.style.display = "none";
    }
});
