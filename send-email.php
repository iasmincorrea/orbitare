<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $empresa = $_POST['empresa'];

    $to = 'contato@orbitaresolutions.com.br';
    $subject = 'Formulário do site';
    $message = "Nome: $nome\n\nEmail: $email\n\nTelefone: $mensagem\n\nEmpresa: $empresa";

    if (mail($to, $subject, $message)) {
        echo 'sucesso';
    } else {
        echo 'erro';
    }
}
?>