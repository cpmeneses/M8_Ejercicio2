const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola Mundo desde Node.js con Docker!');
})

// Si este archivo se ejecuta directamente, inicia el servidor
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // Exporta el servidor para pruebas