<?php
$destino = "pirela.jonathan@gmail.com";
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$contenido = "Nombre: " . $name . 
             "\nCorreo: " . $email . 
             "\nAsunto: " . $subject . 
             "\nMensaje: ". $message;

mail($destino,"Contacto", $contenido);
     echo "<script>              
                window.location= 'index.html'
    </script>";


?>