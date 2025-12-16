<?php

$index = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'Desconocido';
$index = $index . "index.html";

echo '
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compra realizada</title>
    <script>
        setTimeout(function() {
            window.location.href = "' . $index . '";
        }, 3000);
    </script>
</head>
<body>
    <h2>Gracias por su compra!</h2>
    <h2>Serás redirigido en 3 segundos...</h2>
</body>
</html>
';

?>