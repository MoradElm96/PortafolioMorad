<?php

    $destino = "moradelm1996@gmail.com";
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $header = "Envio desde formulario web de morad";
    $mensajeCompleto = "Has recibido un mensaje del formulario de contacto de tu sitio web.\n\n" .
    "Nombre: $name\n" .
    "Teléfono: $phone\n" .
    "Correo electrónico: $email\n" .
    "Tema: $subject\n" .
    "Mensaje:\n$message";

    mail($destino, $subject, utf8_decode($mensajeCompleto), $header);
    session_start();
    $_SESSION['exito'] = true;
    header('Location: ../index.html');
   
  
?>