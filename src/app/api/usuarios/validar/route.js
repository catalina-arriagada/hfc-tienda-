export const dynamic = 'force-dynamic';
import { dbConnect, Usuario, bcrypt } from '../../../../../db'
import jwt from 'jsonwebtoken'; // Instala jwt con npm install jsonwebtoken
import dotenv from'dotenv';
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

export async function POST(req) {
  await dbConnect();

  try {
    const { nombre, contrasenia } = await req.json();
    console.log('Datos recibidos:', { nombre, contrasenia });
    // Busca al usuario por nombre
    const usuario = await Usuario.findOne({ nombre });
    console.log('Usuario encontrado:', usuario);
    console.log('Contraseña recibida:', contrasenia);
    console.log('Contraseña en la base de datos:', usuario.contrasenia);

    if (!usuario || !contrasenia) {
      return new Response(JSON.stringify({ error: 'Usuario no encontrado' }), {
        status: 404,
      });
    }

     // Verifica la contraseña en texto plano
    //  if (usuario.contrasenia !== contrasenia) {
    //   return new Response(JSON.stringify({ error: 'Validación contraseña fallida' }), {
    //     status: 401,
    //   });
    // }
    
    // Verifica la contraseña usando bcrypt
    const isMatchContrasenia = await bcrypt.compare(contrasenia, usuario.contrasenia);
    //console.log('Contraseña recibida:', contrasenia);
    //console.log('Contraseña en la base de datos:', usuario.contrasenia);

    if (!isMatchContrasenia) {
      return new Response(JSON.stringify({ error: 'Validación fallida' }), {
        status: 401,
      });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: usuario._id, nombre: usuario.nombre }, SECRET_KEY, { expiresIn: '1h' });

    // Configurar la cookie con el token
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append(
      'Set-Cookie',
      `token=${token}; HttpOnly; Path=/; Max-Age=3600; Secure; SameSite=Strict`
    )

    return new Response(JSON.stringify({ message: 'Usuario validado, inicio de sesión exitoso', token }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al validar el usuario:', error);
    return new Response(JSON.stringify({ error: 'Error al validar el usuario' }), {
      status: 500,
    });
  }
}