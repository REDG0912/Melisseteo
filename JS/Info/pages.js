document.addEventListener("DOMContentLoaded", function() {
  var menuLinks = document.querySelectorAll(".menu__link");
  var formElement = document.querySelector(".form");
  var backButton_1 = document.querySelector(".back_1")
  var backButton_2 = document.querySelector(".back_2")
  var backButton_3 = document.querySelector(".back_3")
  var aboutElement = document.querySelector(".about");
  var partnersElement = document.querySelector(".partners");
  var serviceElement = document.querySelector(".service");
  var headerElement = document.querySelector(".header");

  backButton_1.addEventListener('click', function() {
    aboutElement.style.display = "none";
    formElement.style.display = "flex";
    menuLinks.forEach(function(link) {
        link.classList.remove("active");
    });
});
  backButton_2.addEventListener('click', function() {
    partnersElement.style.display = "none";
    formElement.style.display = "flex";
    menuLinks.forEach(function(link) {
      link.classList.remove("active");
  });
});
  backButton_3.addEventListener('click', function() {
      serviceElement.style.display = "none";
      formElement.style.display = "flex";
      menuLinks.forEach(function(link) {
        link.classList.remove("active");
    });
  });

  menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener("click", function(event) {
        event.preventDefault();

        menuLinks.forEach(function(link) {
            link.classList.remove("active");
            headerElement.classList.remove("open");
        });

        menuLink.classList.add("active");
  
        var href = menuLink.getAttribute("href");
        if (href === "#about") {
          formElement.style.display = "none";
          partnersElement.style.display = "none";
          serviceElement.style.display = "none";
          aboutElement.style.display = "flex";
          aboutElement.style.animationName = "fadeInLeft";
          aboutElement.classList.add("fadeInLeft");
        } else if (href === "#partners") {
          formElement.style.display = "none";
          aboutElement.style.display = "none";
          serviceElement.style.display = "none";
          partnersElement.style.display = "flex";
          aboutElement.style.animationName = "none";
          aboutElement.classList.remove("fadeInLeft");
        } else if (href === "#service") {
          formElement.style.display = "none";
          serviceElement.style.display = "flex";
          aboutElement.style.display = "none";
          partnersElement.style.display = "none";
        }
      });
    });
  });
  