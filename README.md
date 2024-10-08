Aplicación CRUD con Autenticación
Tabla de Contenidos
Introducción
Características
Tecnologías Utilizadas
Instalación
Uso
Estructura del Proyecto
Contribuciones
Licencia
Introducción
Esta es una aplicación simple de CRUD (Crear, Leer, Actualizar, Eliminar) construida con Node.js, Express, Sequelize y SQLite, que incluye funcionalidad de autenticación. La aplicación permite a los usuarios registrarse, iniciar sesión y gestionar ítems (añadir, actualizar, eliminar). Solo los usuarios autenticados pueden acceder a la lista de ítems y realizar operaciones CRUD.

Características
Autenticación de usuarios (registro, inicio de sesión, cierre de sesión)
Sesiones de usuario utilizando express-session
Operaciones CRUD para los ítems
Añadir, actualizar y eliminar ítems
Solo los usuarios autenticados pueden ver y gestionar los ítems
Contraseñas encriptadas utilizando bcrypt
Almacenamiento persistente utilizando SQLite y el ORM Sequelize
Tecnologías Utilizadas
Node.js: Entorno de ejecución de JavaScript para el servidor
Express: Framework web para Node.js
Sequelize: ORM para gestionar la base de datos SQLite
SQLite: Base de datos SQL ligera
EJS: Motor de plantillas para renderizar páginas dinámicas
bcrypt: Librería para el hash de contraseñas
express-session: Middleware para gestionar las sesiones de usuario
Instalación
Requisitos Previos
Node.js: Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo aquí.
npm: El gestor de paquetes de Node.js, que viene con Node.js.
Pasos
Clona el repositorio:

bash
Copy code
git clone https://github.com/tuusuario/tu-repositorio.git
cd tu-repositorio
Instala las dependencias:

bash
Copy code
npm install
Configura la base de datos:

El proyecto utiliza SQLite como base de datos. No es necesario configurar nada manualmente ya que SQLite crea el archivo de la base de datos automáticamente. Solo necesitas ejecutar la aplicación y la base de datos será creada.

Inicia la aplicación:

bash
Copy code
node app.js
El servidor estará corriendo en http://localhost:3000.

Uso
Registro: Visita http://localhost:3000/register para crear un nuevo usuario.
Iniciar Sesión: Una vez registrado, inicia sesión en http://localhost:3000/login para acceder a la app.
Gestión de Ítems: Después de iniciar sesión, puedes ver, añadir, actualizar o eliminar ítems.
Ejemplo:
Registrar un usuario: admin@example.com con la contraseña admin123.
Iniciar Sesión: Usa las mismas credenciales para iniciar sesión.
Gestionar Ítems: Puedes añadir ítems como "Ítem 1" e "Ítem 2", actualizar sus descripciones y eliminarlos.
