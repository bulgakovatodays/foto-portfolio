<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail -> CharSet = 'UTF-8';
  $mail -> setLanguage('ru', 'phpmailer/language');
  $mail -> IsHTML(true);

  //
  $mail -> setFrom('lesyataranina@gmail.com', 'Lesya');
  //
  $mail -> addAddress('lesyataranina@gmail.com');
  //
  $mail -> Subject = 'Hi! This is test!';

  //
  $body = '<h1>Letter from web-site</h1>';

  if (trim(!empty($_POST['E-mail']))){
    $body.='E-mail '.$_POST['E-mail'].;
  }
  if (trim(!empty($_POST['Phone']))){
    $body.='Phone '.$_POST['Phone'].;
  }
  if (trim(!empty($_POST['Message']))){
    $body.='Message '.$_POST['Message'].;
  }

  $mail->Body = $body;

  if (!$mail->send()) {
    $messege = 'Mistake';
  } else {
    $messege = 'Saksess!';
  }

  $response = ['messege' => $messege];

  header('Content-type: application/json');
  echo json_encode($response);
  ?>