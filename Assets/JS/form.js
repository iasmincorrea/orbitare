document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var formulario = this;

    var xhr = new XMLHttpRequest();
    xhr.open(formulario.method, formulario.action, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if (xhr.responseText === "sucesso") {
                formulario.reset(); // Limpa os campos do formulário
                document.getElementById("mensagem-sucesso").style.display = "block";
            } else {
                alert("Ocorreu um erro ao enviar o email.");
            }
        }
    };
    xhr.send(new FormData(formulario));
});