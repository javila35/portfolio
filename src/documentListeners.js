const handlePreload = function () {
    document.getElementsByTagName("body")[0].classList.remove("preload");
};

document.addEventListener("DOMContentLoaded", handlePreload);
document.removeEventListener("DOMContentLoaded", handlePreload);