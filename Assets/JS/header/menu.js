if (window.matchMedia("(max-width:1025px)").matches) {

  function openMenu() {
    var menuMobile = document.querySelector('#menu-mobile');
    var header = document.querySelector('.header');
  
    menuMobile.classList.toggle('menu-open');
    header.classList.toggle('header-open');
  }
  
  var menuItems = document.querySelectorAll('.menu-item__title');

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(event) {
      var menuMobile = document.querySelector('#menu-mobile');
      var header = document.querySelector('.header');
      var menuButton = document.querySelector('.header-menu');
  
      if (menuMobile.classList.contains('menu-open')) {
        menuMobile.classList.remove('menu-open');
        header.classList.remove('header-open');
        menuButton.classList.remove('menu-image__open');
        menuButton.classList.add('menu-image__closed');
      }
    });
  }
  
}