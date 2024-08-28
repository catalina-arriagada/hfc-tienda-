import { dbConnect, Usuario, bcrypt } from '../../../../../db'

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

    if (!usuario) {
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

    return new Response(JSON.stringify({ message: 'Usuario validado' }), {
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