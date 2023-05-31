if (window.matchMedia("(min-width:1026px)").matches) {
  var currentStep = 1;

  function showDescription(step) {
    // Oculta todas as descrições
    var descriptions = document.getElementsByClassName('description');
    for (var i = 0; i < descriptions.length; i++) {
      descriptions[i].classList.remove('active');
    }
    
    // Exibe a descrição da etapa selecionada
    var selectedDescription = document.getElementById('description' + step);
    selectedDescription.classList.add('active');
    
    // Define a etapa selecionada como ativa
    var steps = document.getElementsByClassName('step');
    for (var i = 0; i < steps.length; i++) {
      steps[i].classList.remove('active');
    }
    steps[step - 1].classList.add('active');
    
    currentStep = step;
  }
    
  function navigate(direction) {
    var nextStep = currentStep + direction;
    
    if (nextStep < 1 || nextStep > 4) {
      return;
    }
    
    showDescription(nextStep);
  }
} else {
  $('.steps-columns').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    dots: false,
    arrows: true,
  });
}