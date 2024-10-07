const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        nombre: "Pablo Garcia Gonzalez",
        carnet: "201901107",
        curso: "Analisis y Diseño de Sistemas 1",
        auxiliar: "Bryan Gerardo Páez Morales"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
