var typed = new Typed('.auto-type', {
  strings: [" Student Software Developer", " 18 years old"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
  });

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // main.js
  
  // Selecteer de navigatie en het hamburger menu
  const navLinks = document.querySelector('.nav-links');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  
  // Voeg een click event listener toe aan het hamburger menu
  hamburgerMenu.addEventListener('click', () => {
      // Toggle de .nav-active class op de navigatie
      navLinks.classList.toggle('nav-active');
  });