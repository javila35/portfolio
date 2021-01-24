document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByTagName("body")[0].classList.remove("preload");
    document.removeEventListener("DOMContentLoaded");
});