<?php

if(isset($_POST['email']) && !empty($_POST['email'])) {
    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $empresa = addslashes($_POST['empresa']);

    $to = "contato@orbitaresolutions.com.br";
    $subject = "Lead do site";
    $body = "Nome: ".$nome."\n".
            "E-mail: ".$email."\n".
            "Telefone: ".$telefone."\n".
            "Empresa: ".$empresa;
    $header = "From:contato@orbitaresolutions.com.br"."\r\n"."Reply-To:".$email."\r\n"."X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)) {
        echo("E-mail enviado com sucesso!");
    } else {
        echo("O e-mail não pode ser enviado.");
    }
}
?>