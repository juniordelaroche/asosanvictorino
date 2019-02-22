<?php

//Define some constants


// Read the form values
$success = false;
$senderName = isset($_POST['name']) ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name']) : "";
$senderEmail = isset($_POST['email']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email']) : "";
//email subject

$message = isset($_POST['message']) ? preg_replace("/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message']) : "";

// If all values exist, send the email


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($senderName && $senderEmail && $message) {
    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    
    //Server settings
    //$mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'jroche@herramientasvirtuales.com';                 // SMTP username
    $mail->Password = '23628229';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('jroche@herramientasvirtuales.com', 'ASOSANVICTORINO');    // Add a recipient
    $mail->addAddress($senderEmail);               // Name is optional
    $mail->addReplyTo('jroche@herramientasvirtuales.com', 'Information');
    $mail->addCC('jroche@herramientasvirtuales.com');
    // $mail->addBCC('jroche@herramientasvirtuales.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Respuesta automatica';
    $mail->Body    = $senderName .' <b>Gracias por contactarnos pronto estaremos comunicandonos con usted.</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mailParaASO = new PHPMailer(true);
    $mailParaASO->isSMTP();                                      // Set mailer to use SMTP
    $mailParaASO->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mailParaASO->SMTPAuth = true;                               // Enable SMTP authentication
    $mailParaASO->Username = 'jroche@herramientasvirtuales.com';                 // SMTP username
    $mailParaASO->Password = '23628229';                           // SMTP password
    $mailParaASO->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mailParaASO->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mailParaASO->setFrom('jroche@herramientasvirtuales.com', 'ASOSANVICTORINO');    // Add a recipient
    $mailParaASO->addAddress('jroche@herramientasvirtuales.com');               // Name is optional
    $mailParaASO->addReplyTo('jroche@herramientasvirtuales.com', 'Information');
    $mailParaASO->addCC('jroche@herramientasvirtuales.com');
    // $mailParaASO->addBCC('jroche@herramientasvirtuales.com');

    //Attachments
    //$mailParaASO->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mailParaASO->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mailParaASO->isHTML(true);                                  // Set email format to HTML
    $mailParaASO->Subject = 'Consulta de usuario';
    $mailParaASO->Body    = $senderName .' Correo: ' . $senderEmail . ' pregunta: ' . $message;
    $mailParaASO->AltBody = 'Correo de clientes';


    //ENVIO DEL CORREO
    $mail->send();
    $mailParaASO->send();
    echo "<p class='success'>Gracias por contactarnos. Pronto estaremos en contacto con usted!</p>";
 }



?>