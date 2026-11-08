const express = require('express');
const libros = require('./data/libros.json');
const app = express();
const PORT = 3000;

app.get('/api/libros', (req, res) => res.json(libros));
app.get('/api/libros/:id', (req, res) => {
  const libro = libros.find(item => item.id === Number(req.params.id));
  if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
  res.json(libro);
});
app.listen(PORT, () => console.log(`API disponible en http://localhost:${PORT}`));
