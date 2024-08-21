const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// Carga las variables de entorno del archivo .env
dotenv.config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const port = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Reemplazar con la URL del frontend
}));
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));
//

// Definir el esquema y el modelo de Usuarios
const usuariosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Debes ingresar un nombre!']
      },
      email: {
        type: String,
        required: [true, 'Debes ingresar un Email!'],
        unique: true, // Asegura que el email sea único
        validate: {
          validator: function(v) {
            // Expresión regular para validar el correo electrónico
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
          },
          message: props => `${props.value} no es un correo electrónico válido!`
        }
      },
      telefono: {
        type: Number,
        required: [true, 'Debes ingresar un teléfono!'],
        },
      region: {
        type: String,
        required: [true, 'Debes ingresar una region!'],
      },
      comuna: {
        type: String,
        required: [true, 'Debes ingresar una comuna!'],
      },
      direccion: {
        type: String,
        required: [true, 'Debes ingresar una dirección!'],
      },
      contrasenia: {
        type: String,
        required: [true, 'Debes ingresar una contraseña!'],
      }
  }, { collection: 'usuarios' }); // Especifica el nombre de la colección
  
  const Usuario = mongoose.model('Usuario', usuariosSchema);

  // Ruta para agregar un nuevo usuario
  app.post('/usuarios', async (req, res) => {
    const { nombre, email, telefono, region, comuna, direccion, contrasenia } = req.body;
  
    try {
      const nuevoUsuario = new Usuario({ nombre, email, telefono, region, comuna, direccion, contrasenia });
      await nuevoUsuario.save();
      res.status(201).json(nuevoUsuario);
    } catch (e) {
        // Si ocurre un error de validación, se muestra el mensaje de error
        if (e.name === 'ValidationError') {
            return res.status(400).json({ e: error.message });
        }

      res.status(500).json({ e: 'Error al agregar el usuario' });
    }
  });

  // Ruta para obtener todos los usuarios
    app.get('/usuarios', async (req, res) => {
        try {
            const usuarios = await Usuario.find();
            res.status(200).json(usuarios);
        } catch (e) {
            res.status(500).json({ error: 'Error al obtener los usuarios' });
        }
    });

    // Ruta para el inicio de sesión
    app.post('/login', async (req, res) => {
    const { nombre, contrasenia } = req.body;

    try {
        const usuario = await Usuario.findOne({ nombre });
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(contrasenia, usuario.contrasenia);
        if (!isMatch) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        // Aquí podría generar un token JWT y enviarlo al cliente
        res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });

    } catch (e) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
  });

  // Esquema del Producto
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, // El nombre del producto es obligatorio
    trim: true, // Elimina espacios en blanco antes y después del valor
  },
  imagen: {
    type: String, // URL de la imagen del producto
    required: true,
  },
  precio: {
    type: String,
    required: true, // El precio del producto es obligatorio
    //min: 0, // El precio no puede ser negativo
  },
}, { collection: 'productos' });

// Modelo de Producto
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;

  // Ruta para obtener un producto por ID
app.get('/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

// Ruta para obtener todos los productos
app.get('/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });

