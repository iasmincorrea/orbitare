if (window.matchMedia("(max-width:1025px)").matches) {

  function openMenu() {
    if(document.querySelector(".menu").classList.contains("menu-open")) {
      document.querySelector(".menu").classList.remove("menu-open");
    } else {
      document.querySelector(".menu").classList.add("menu-open");
    }
    document.querySelector(".header").classList.toggle("header-open");
  }
    
  // Mobile - Fechar menu e direcionar para a âncora
  var links = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {

        var menuMobile = document.querySelector('#menu-mobile');
        var header = document.querySelector('.header');

        if (menuMobile.classList.contains('menu-open')) {
        menuMobile.classList.remove('menu-open');
        header.classList.remove('header-open');
        }

        event.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
        });
    });
  }
  
}