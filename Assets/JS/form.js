document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var nome = document.getElementsByName('nome')[0].value.trim();
    var email = document.getElementsByName('email')[0].value.trim();
    var telefone = document.getElementsByName('telefone')[0].value.trim();
    var empresa = document.getElementsByName('empresa')[0].value.trim();

    if (nome === '' || email === '' || telefone === '' || empresa === '') {
        // Exibe uma mensagem de erro
        exibirMensagem('Ocorreu um erro. Por favor, preencha todos os campos.', 'erro');
    } else {
        // Envia o formulário via AJAX
        var xhr = new XMLHttpRequest();
        var url = 'send-email.php';
        var params = 'nome=' + encodeURIComponent(nome) + '&email=' + encodeURIComponent(email) +
                     '&telefone=' + encodeURIComponent(telefone) + '&empresa=' + encodeURIComponent(empresa);
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText === 'sucesso') {
                    // Limpa os campos do formulário
                    document.getElementsByName('nome')[0].value = '';
                    document.getElementsByName('email')[0].value = '';
                    document.getElementsByName('telefone')[0].value = '';
                    document.getElementsByName('empresa')[0].value = '';

                    // Exibe mensagem de sucesso
                    exibirMensagem('O email foi enviado com sucesso.', 'sucesso');
                } else {
                    // Exibe mensagem de erro
                    exibirMensagem('Ocorreu um erro ao enviar o email.', 'erro');
                }
            }
        };

        xhr.send(params);
    }
});

function exibirMensagem(texto, tipo) {
    var mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = texto;

    if (tipo === 'sucesso') {
        mensagemDiv.className = 'mensagem-sucesso';
    } else if (tipo === 'erro') {
        mensagemDiv.className = 'mensagem-erro';
    }

    mensagemDiv.style.display = 'block';
}