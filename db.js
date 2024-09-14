import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from'dotenv';
import bcrypt from 'bcrypt';
// Carga las variables de entorno del archivo .env
dotenv.config();
const saltRounds = 10;

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'https://hfc-tienda-8fj7.onrender.com/',
}));
app.use(express.json());

  // // Conectar a MongoDB
  // mongoose.connect(process.env.MONGODB_URI)
  // .then(() => console.log('Conectado a MongoDB'))
  // .catch(err => console.error('Error al conectar a MongoDB:', err));
  // //

  //Conectar a MongoDB
  export async function dbConnect() {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGODB_URI);
  }
  
  
  // Llamar a la función de conexión
  //dbConnect();
  
  // Exportar mongoose para que pueda ser utilizado en otros archivos
 // module.exports = mongoose;
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// La URI de conexión de MongoDB desde las variables de entorno
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// Modelos //

// Definir el esquema y el modelo de Usuarios
const usuariosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Debes ingresar un nombre!']
      },
      contrasenia: {
        type: String,
        required: [true, 'Debes ingresar una contraseña!'],
      }
  }, { collection: 'usuarios' }); // Especifica el nombre de la colección
  
  //const Usuario = mongoose.model('Usuario', usuariosSchema);
  const Usuario = mongoose.models.Usuario || mongoose.model('Usuario', usuariosSchema);

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
      type: Number,
      required: true, // El precio del producto es obligatorio
      min: [0, 'El precio no puede ser negativo'], 
    },
  }, { collection: 'productos' });
  
  // Modelo de Producto
  //const Producto = mongoose.model('Producto', productoSchema);
  const Producto = mongoose.models.Producto || mongoose.model('Producto', productoSchema);
  
   //module.exports = Producto;
  // module.exports = Usuario;

  // Definir el esquema y el modelo de Pedidos
  const pedidoSchema = new mongoose.Schema({
    usuarioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
    },
    nombreUsuario: {
      type: String,
      required: true,
    },
    productos: [
      {
        productoId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Producto',
          required: true,
        },
        nombre: {
          type: String,
          required: true,
        },
        precio: {
          type: Number, // Cambia de String a Number si es más adecuado
          required: true,
        },
        cantidad: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
  }, { collection: 'pedidos' });
  
  const Pedido = mongoose.models.Pedido || mongoose.model('Pedido', pedidoSchema);

// Definir el esquema y el modelo de Citas
const citasSchema = new mongoose.Schema({
  fechaHora: { type: Date, required: true },
  servicio: { type: String, required: true },
  alturacabello: { type: String, required: true },
  comentarios: { type: String },
  usuario: {
    id: { type: String, required: true },
    nombre: { type: String, required: true },
  },
});

const Cita = mongoose.models.Cita || mongoose.model('Cita', citasSchema);

// Exportar los modelos
export { Usuario, Producto, Pedido, Cita, bcrypt };


// Rutas //

// Ruta para agregar un nuevo usuario
app.post('/usuarios', async (req, res) => {
  const { nombre, contrasenia } = req.body;
  console.log('Datos recibidos en la ruta /usuarios:', { nombre, contrasenia });
  try {
    // Cifrar la contraseña
    const hashedContrasenia = await bcrypt.hash(contrasenia, saltRounds);

    // Crear y guardar el nuevo usuario con la contraseña cifrada
    const nuevoUsuario = new Usuario({ nombre, contrasenia: hashedContrasenia });
    await nuevoUsuario.save();

    res.status(201).json(nuevoUsuario);
    } catch (e) {
    console.error('Error al agregar el usuario:', e);
    if (e.name === 'ValidationError') {
      return res.status(400).json({ error: e.message });
    }
    res.status(500).json({ error: 'Error al agregar el usuario' });
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

    dbConnect().catch(err => {
      console.error('Error al conectar a la base de datos:', err);
  });

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

// Ruta para validar usuario por nombre y contraseña
app.post('/usuarios/validar', async (req, res) => {
  try {
    const { nombre, contrasenia } = req.body;
    console.log('Datos recibidos:', { nombre, contrasenia });

    // Busca al usuario por nombre
    const usuario = await Usuario.findOne({ nombre });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verifica la contraseña
    const isMatchContrasenia = await bcrypt.compare(contrasenia, usuario.contrasenia);

    if (!isMatchContrasenia) {
      return res.status(401).json({ error: 'Validación fallida' });
    }

    res.status(200).json({ message: 'Usuario validado' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al validar el usuario' });
  }
});

app.listen(port, () => {
    console.log(`Desde el codigo: Servidor corriendo en puerto ${port}`);
  });