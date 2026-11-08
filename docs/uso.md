Uso de la API

La API permite consultar el catálogo de libros.

Endpoints disponibles

Método | Ruta | Descripción
GET | /api/libros | Lista de libros
GET | /api/libros/:id | Libro por identificador

Ejemplos de consulta

GET http://localhost:3000/api/libros
GET http://localhost:3000/api/libros/1
GET http://localhost:3000/api/libros/999

Si el libro no existe, el servidor devuelve HTTP 404.
