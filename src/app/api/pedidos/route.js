import { NextResponse } from 'next/server';
import { dbConnect, Pedido } from '../../../../db';
import jwt from 'jsonwebtoken';

//Obtener pedido
export async function GET(request) {
  await dbConnect();
 
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    
    if (!token) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
    }

    // Decodificar el token para obtener el nombre de usuario
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const nombreUsuario = decoded.nombre; // Asegúrate de que el token contenga esta información

    // Obtener los pedidos del usuario específico
    const pedidos = await Pedido.find({ nombreUsuario }).populate('productos.productoId').exec();

    // Obtener todos los pedidos
    //const pedidos = await Pedido.find().populate('productos.productoId').exec();

    return NextResponse.json(pedidos);
    
  } catch (error) {
    console.error('Error al obtener los pedidos:', error);
    return NextResponse.json({ message: 'Error al obtener los pedidos' }, { status: 500 });
  }
}