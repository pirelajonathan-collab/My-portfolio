<?php
$destino = "pirela.jonathan@gmail.com";
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$contenido = "Nombre: " . $name . 
             "\nTeléfono: ". $phone . 
             "\nCorreo: " . $email . 
             "\nAsunto: " . $subject . 
             "\nMensaje: ". $message;

mail($destino,"Contacto", $contenido);
     echo "<script>              
                window.location= 'index.html'
    </script>";


?>