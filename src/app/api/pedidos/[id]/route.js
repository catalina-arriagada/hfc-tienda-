import { NextResponse } from 'next/server';
import { dbConnect, Pedido } from '../../../../../db';
import jwt from 'jsonwebtoken';

// Eliminar pedido
export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = params; // ID del pedido a modificar

  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    
    if (!token) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
    }

    // Decodificar el token para obtener el nombre de usuario
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const nombreUsuario = decoded.nombre; // Asegúrate de que el token contenga esta información

    // Obtener el cuerpo de la solicitud
    const { productoId } = await request.json();

    // Buscar y actualizar el pedido del usuario
    const pedido = await Pedido.findOneAndUpdate(
      { _id: id, nombreUsuario: nombreUsuario },
      {
        $pull: { productos: { _id: productoId } }, // Eliminar el producto específico
        $inc: { total: -1 * (await Pedido.findOne({ _id: id }).populate('productos').exec()).productos.find(p => p._id.toString() === productoId).precio } // Actualizar el total
      },
      { new: true }
    );

    if (!pedido) {
      return NextResponse.json({ message: 'Pedido no encontrado o no autorizado' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Producto eliminado del carrito', pedido });
    
  } catch (error) {
    console.error('Error al eliminar el producto del carrito:', error);
    return NextResponse.json({ message: 'Error al eliminar el producto' }, { status: 500 });
  }
}
