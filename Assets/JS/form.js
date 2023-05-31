var form = document.querySelector("#form");
        
form?.addEventListener('submit', function (event) {
    if (!event.target.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        alert("Preencha todos os campos.")
    } else {
        alert("Mensagem enviada com sucesso!")
    }
});