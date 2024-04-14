import express from "express"
import {promises} from "fs"

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = 2023;

app.get('/', (req, res) => {
    res.send('Nombre: Fernando Guaragna');
});

app.get('/materia', (req, res) => {
    res.send('Información de la materia: Aplicaciones Híbridas');
});

app.get('/profesor', (req, res) => {
    res.send('Información del profesor: Camila Belen Marcos Galban');
});

// cualquier otra URL
app.get('/masinfo', (req, res) => {
    res.send('Página no encontrada');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});