import express from 'express';

const app = express();
const port = 3000;

// Información del grupo de trabajo
const grupo = {
    nombre: "Grupo de Desarrollo",
    integrantes: [
        { id: 1, nombre: "Integrante 1", rol: "Desarrollador" },
        { id: 2, nombre: "Integrante 2", rol: "Diseñador" },
        { id: 3, nombre: "Integrante 3", rol: "Tester" }
    ]
};

// Ruta principal
app.get('/', (req, res) => {
    res.send(`Bienvenido al ${grupo.nombre}`);
});

// Ruta para obtener información de los integrantes
app.get('/integrantes', (req, res) => {
    res.json(grupo.integrantes);
});

// Ruta para obtener información de un integrante específico
app.get('/integrantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const integrante = grupo.integrantes.find(i => i.id === id);
    if (integrante) {
        res.json(integrante);
    } else {
        res.status(404).send('Integrante no encontrado');
    }
});

// Ruta para presentar productos (ejemplo)
app.get('/products', (req, res) => {
    const productos = [
        { id: 1, nombre: "Producto 1", precio: 100 },
        { id: 2, nombre: "Producto 2", precio: 200 }
    ];
    res.send(`<h1>Productos</h1><ul>${productos.map(p => `<li>${p.nombre} - $${p.precio}</li>`).join('')}</ul>`);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
