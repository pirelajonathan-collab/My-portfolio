<?php

$destino = "jackpereyra_17@hotmail.com";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$web = "www.jackpereyra.com";
$nombre = $_POST['nombre'];

$whatsapp = $_POST['whatsapp'];

$pais = $_POST['pais'];

$dibujo = $_POST['dibujo'];


$texto = $_POST['texto'];

    $file = $_FILES['imagen'];
    $filename = $file['name'];
    $mimetype = $file['type'];

    $allowed_types = array("image/jpg", "image/png", "image/jpeg");
    
    if (!in_array($mimetype, $allowed_types)){
           header("Location: index.php");
    }
    
    if (!is_dir("uploads")){
        mkdir("uploads", 0777);
    }

    move_uploaded_file($file['tmp_name'], 'uploads/'.$filename);
    


$contenido = "Nombre: " . $nombre . "<br>whatsapp: " . $whatsapp . "<br>pais: " . $pais . "<br>dibujo: " . $dibujo .  "<br>imagen: ". $filename . "<br>texto: " . $texto. "<br>Web: ". '<a href="https://jackpereyra.com/uploads/'.$filename.'">Imagen</a>';



mail($destino,"Contacto", $contenido, $headers);

   echo "<script>

                alert('muchas gracias por tu mensaje te respondere al Whatsapp lo antes posible');

                window.location= 'index.php'

    </script>";

?>