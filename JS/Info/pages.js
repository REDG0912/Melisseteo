document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll(".menu__link");
    var formElement = document.querySelector(".form");
    var header = document.querySelector(".header");

    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener("click", function(event) {
            event.preventDefault();

            menuLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            menuLink.classList.add("active");

            var href = menuLink.getAttribute("href");
            if (href === "#") {
                formElement.style.display = "none";
            } else {
                formElement.style.display = "block";
            }
            header.classList.remove("open");
        });
    });
}); document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll(".menu__link");
    var formElement = document.querySelector(".form");
    var header = document.querySelector(".header");

    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener("click", function(event) {
            event.preventDefault();

            menuLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            menuLink.classList.add("active");

            var href = menuLink.getAttribute("href");
            if (href === "#") {
                formElement.style.display = "none";
            } else {
                formElement.style.display = "block";
            }

            header.classList.remove("open");
        });
    });
});