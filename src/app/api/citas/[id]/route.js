import { NextResponse } from 'next/server';
import { dbConnect, Cita } from '../../../../../db'; 
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET;

// Eliminar cita
export async function DELETE(request, { params }) {
  await dbConnect();

  const { id } = params; // Obtiene el id de la cita desde la URL
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) return NextResponse.json({ message: 'No autorizado' }, { status: 401 });

  const token = authHeader.split(' ')[1];
  try {
    // Verifica el token
    jwt.verify(token, SECRET_KEY);
    
    // Elimina la cita
    const result = await Cita.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: 'Cita no encontrada' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Cita eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar la cita:', error);
    return NextResponse.json({ message: 'Error al eliminar la cita' }, { status: 500 });
  }
}

// Editar cita
export async function PATCH(request, { params }) {
    await dbConnect();
  
    const { id } = params; // Obtiene el id de la cita desde la URL
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
  
    const token = authHeader.split(' ')[1];
    try {
      // Verifica el token
      jwt.verify(token, SECRET_KEY);
  
      // Obtiene los datos de la solicitud
      const { fechaHora, servicio, alturacabello, comentarios } = await request.json();
  
      // Actualiza la cita en la base de datos
      const result = await Cita.findByIdAndUpdate(id, {
        fechaHora,
        servicio,
        alturacabello,
        comentarios
      }, { new: true });
  
      if (!result) {
        return NextResponse.json({ message: 'Cita no encontrada' }, { status: 404 });
      }
  
      return NextResponse.json(result);
    } catch (error) {
      console.error('Error al actualizar la cita:', error);
      return NextResponse.json({ message: 'Error al actualizar la cita' }, { status: 500 });
    }
  }
