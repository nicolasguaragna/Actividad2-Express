import express from "express"
import {promises} from "fs"

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = 2023;
const topTecnologias = ["Node.js", "React", "Vue.js", "Express", "MongoDB"];

// array  productos (id,nombre, precio)
const productos = [
    { id: 1, nombre: 'Smart TV 4K UHD Samsung 50" UN50AU7000', precio: 582999 },
    { id: 2, nombre: 'Smart TV 32” HD Android TV Admiral AD32E3A', precio: 199999 },
    { id: 3, nombre: 'Smart TV 4K UHD Samsung 55" UN55AU7000', precio: 749999 },
    { id: 4, nombre: 'Smart TV 32" HD Samsung UN32T4300A', precio: 349999 },
    { id: 5, nombre: 'Smart TV 43” FHD Android TV Admiral AD43E3A', precio: 320000},
    { id: 6, nombre: 'Celular Samsung Galaxy A04s 128GB Black', precio: 321999 },
    { id: 7, nombre: 'Celular Samsung Galaxy A14 128GB Black', precio: 229000 },
    { id: 8, nombre: 'Celular Motorola G23 128GB Azul', precio: 349000 },
    { id: 9, nombre: 'Celular ZTE Blade A72s 128GB Space Gray', precio: 149000 },
    { id: 10, nombre: 'Celular Samsung Galaxy A24 128GB Negro', precio: 519000 }
];

//ruta para filtrar productos por rango de precios
app.get('/productos/filtrar', (req, res) => {
    const minimo = parseInt(req.query.minimo);
    const maximo = parseInt(req.query.maximo);
    
    let productosFiltrados = productos;
    
    if (!isNaN(minimo)) {
        productosFiltrados = productosFiltrados.filter(prod => prod.precio >= minimo);
    }
    if (!isNaN(maximo)) {
        productosFiltrados = productosFiltrados.filter(prod => prod.precio <= maximo);
    }
    res.json(productosFiltrados);
});

//muestra listado de productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

//muestr info de un producto específico por ID
app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(prod => prod.id === id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).send('Producto no encontrado');
    }
});


app.get('/', (req, res) => {
    res.send('Nombre: Fernando Guaragna');
});

app.get('/materia', (req, res) => {
    res.send('Información de la materia: Aplicaciones Híbridas');
});

app.get('/profesor', (req, res) => {
    res.send('Información del profesor: Camila Belen Marcos Galban');
});

//ruta para manejar el array de tecnologías
app.get('/stack', (req, res) => {
    const tecnologia = req.query.tecnologia;

// verifica si la tecnología está en el top 5
    if (topTecnologias.includes(tecnologia)) {
    res.send('¿Donde te dejo el CV?');
    } else {
    res.send('A leer la documentación entonces...');
    }
});

// cualquier otra URL
app.get('/masinfo', (req, res) => {
    res.send('Página no encontrada');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});