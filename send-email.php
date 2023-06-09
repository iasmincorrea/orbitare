<?php
if(isset($_POST['email']) && !empty($_POST['email'])) {
    $nome = addslashes($_POST['nome']);
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

    if (mail($to, $subject, $body, $header)) {
        $response = array('success' => true, 'message' => 'E-mail enviado com sucesso!');
    } else {
        $response = array('success' => false, 'message' => 'O e-mail não pôde ser enviado.');
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}
?>