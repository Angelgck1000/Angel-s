<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";  // El usuario por defecto de XAMPP es 'root'
$password = "";      // La contraseña por defecto está vacía
$dbname = "contacto";  // El nombre de la base de datos que creaste

// Conectar a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir los datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Preparar la consulta SQL para insertar los datos en la base de datos
$sql = "INSERT INTO mensajes (nombre, email, asunto, mensaje) VALUES ('$nombre', '$correo', '$asunto', '$mensaje')";

// Ejecutar la consulta y verificar si fue exitosa
if ($conn->query($sql) === TRUE) {
    echo "Mensaje enviado correctamente";
} else {
    echo "Error al enviar el mensaje: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>