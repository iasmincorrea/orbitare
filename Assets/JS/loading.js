var loader = document.getElementById('loading');
var body = document.getElementById('body');

loader.style.display = 'flex';
body.style.overflow = 'hidden';

var tempoExibicao = 1500;

function ocultarTelaDeCarregamento() {
  loader.style.display = 'none'; 
  body.style.overflow = 'initial';
}

setTimeout(ocultarTelaDeCarregamento, tempoExibicao);