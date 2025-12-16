<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "carnicas";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Función para enviar una respuesta JSON
function responder($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data);
    exit;
}

// Verificar si los datos fueron enviados
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    $usuario = $data['username'] ?? '';
    $contrasena = $data['password'] ?? '';

    // Consulta para verificar el usuario
    $query = "SELECT username, nombre, email, password FROM usuarios WHERE username = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $stmt->bind_result($username, $nombre, $email, $password);

    if ($stmt->fetch()) {
        // Verificar la contraseña
        if ($contrasena === $password) { // Comparación directa ya que la contraseña no está hasheada
            responder(["nombre" => "$nombre", "email" => "$email"], 200);
        } else {
            responder(["error" => "Acceso no permitido"], 403);
        }
    } else {
        responder(["error" => "Acceso no permitido"], 403);
    }

    $stmt->close();

} elseif ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
} else {
    responder(["error" => "Metodo no permitido"], 405);
}

$conn->close();
?>
