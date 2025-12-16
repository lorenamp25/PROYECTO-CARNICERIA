DROP DATABASE IF EXISTS Carnicas;

CREATE DATABASE Carnicas CHARACTER SET utf8mb4;

USE Carnicas;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO usuarios (email, nombre, username, password) VALUES
('juan.perez@example.com', 'Juan Pérez', 'juanp', '1234'),
('maria.gomez@example.com', 'María Gómez', 'mariag', '1234'),
('carlos.lopez@example.com', 'Carlos López', 'carlosl', '1234'),
('ana.rodriguez@example.com', 'Ana Rodríguez', 'anar', '1243'),
('pedro.sanchez@example.com', 'Pedro Sánchez', 'pedros', '1234');




