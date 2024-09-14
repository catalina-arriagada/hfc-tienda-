export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { dbConnect, Cita } from '../../../../db';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

export async function POST(request) {
  await dbConnect();
  
  const { fechaHora, servicio, alturacabello, comentarios } = await request.json();
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  try {
    // Decodifica el token para obtener los datos del usuario
    const decoded = jwt.verify(token, SECRET_KEY);
    const usuarioId = decoded.id;
    const nombreUsuario = decoded.nombre;

    // Crear una nueva cita
    const nuevaCita = new Cita({
      fechaHora,
      servicio,
      alturacabello,
      comentarios,
      usuario: {
        id: usuarioId,
        nombre: nombreUsuario,
      },
    });

    await nuevaCita.save();

    return NextResponse.json({ message: 'Cita agendada con éxito' }, { status: 201 });
    
  } catch (error) {
    console.error('Error al agendar la cita:', error);
    return NextResponse.json({ message: 'Error al agendar la cita' }, { status: 500 });
  }
}

export async function GET(request) {
  await dbConnect();

  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) return NextResponse.json({ message: 'No autorizado' }, { status: 401 });

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded.id;

    const citas = await Cita.find({ 'usuario.id': userId });
    return NextResponse.json(citas, { status: 200 });
  } catch (error) {
    console.error('Error al obtener las citas:', error);
    return NextResponse.json({ message: 'Error al obtener las citas' }, { status: 500 });
  }
}
