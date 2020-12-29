-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-12-2020 a las 09:19:45
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reglas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atributos`
--

CREATE TABLE `atributos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `atributos`
--

INSERT INTO `atributos` (`id`, `nombre`) VALUES
(1, 'Domicilio'),
(2, 'Población'),
(3, 'Localidad'),
(4, 'Codigo Postal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `panel_personas`
--

CREATE TABLE `panel_personas` (
  `id_persona` int(11) NOT NULL,
  `nombres` varchar(250) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` longtext DEFAULT NULL,
  `imagen` varchar(250) DEFAULT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `registrado` datetime DEFAULT NULL,
  `token` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='public id_persona: string;\npublic nombres: string;\npublic password:string;\npublic email:string;\npublic telefono:string;\npublic direccion: string;\npublic imagen:string;\npublic registrado:string;\npublic id_rol:string;\npublic tokenid: string;';

--
-- Volcado de datos para la tabla `panel_personas`
--

INSERT INTO `panel_personas` (`id_persona`, `nombres`, `email`, `password`, `imagen`, `id_rol`, `telefono`, `direccion`, `registrado`, `token`) VALUES
(24, 'Rafa Peña ', 'rafa@webentorn.com', '$2b$10$yXQeo.7y/9ByhKrJME4OPeV6tu8uz9blR2dt3UKRwP3y1/6w52lru', 'av-2.png', NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvcyI6eyJub21icmVzIjoiUmFmYSBQZcOxYSAiLCJlbWFpbCI6InJhZmFAd2ViZW50b3JuLmNvbSJ9LCJpYXQiOjE2MDg3NTExMDYsImV4cCI6MTYxMTM0MzEwNn0.ODpTC9XFUb4GLrTO1YJfqMB5BanvpgcHJWW8HQqCoik'),
(33, 'Alfonso Guerra', 'mago@merlin.com', '$2b$10$gPOby/xKIvOA/VdC6EZ8GuLZFo4pf8gh.2KKB6VI464wHD7BjJqUy', NULL, NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvcyI6eyJub21icmVzIjoiUmlnb2JlcnRvIFBpY2Fwb3J0ZSIsImVtYWlsIjoibWFnb0BtZXJsaW4uY29tIn0sImlhdCI6MTYwNjY2NzY4MiwiZXhwIjoxNjA5MjU5NjgyfQ.oftoclpmHDGUnYLsJdWli828GVI1zXLSNNwxAonLCw4');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `atributos`
--
ALTER TABLE `atributos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `panel_personas`
--
ALTER TABLE `panel_personas`
  ADD PRIMARY KEY (`id_persona`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `atributos`
--
ALTER TABLE `atributos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `panel_personas`
--
ALTER TABLE `panel_personas`
  MODIFY `id_persona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
