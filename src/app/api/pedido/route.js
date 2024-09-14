export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { dbConnect, Pedido, Usuario, Producto } from '../../../../db';
import jwt from 'jsonwebtoken';
import dotenv from'dotenv';
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

export async function POST(request) {
    await dbConnect();
  
    const { productoId, nombre, precio, cantidad } = await request.json();
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.split(' ')[1]; // Extrae el token del encabezado Authorization
  
    try {
      // Decodifica el token para obtener los datos del usuario
      const decoded = jwt.verify(token, SECRET_KEY);
      const usuarioId = decoded.id;
  
      // Busca al usuario en la base de datos
      const usuario = await Usuario.findById(usuarioId);
  
      if (!usuario) {
        return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 });
      }
  
      // Busca el producto en la base de datos
      const producto = await Producto.findById(productoId);
  
      if (!producto) {
        return NextResponse.json({ message: 'Producto no encontrado' }, { status: 404 });
      }
  
      // Busca el pedido existente o crea uno nuevo
      let pedido = await Pedido.findOne({ usuarioId });
  
      if (!pedido) {
        // Crea un nuevo pedido si no existe
        pedido = new Pedido({
          usuarioId,
          nombreUsuario: usuario.nombre,
          productos: [{ productoId, nombre, precio, cantidad }],
          total: precio * cantidad,
        });
  
        await pedido.save();
        return NextResponse.json({ message: 'Producto añadido al carrito' });
      }
  
      // Añade el producto al pedido existente
      pedido.productos.push({ productoId, nombre, precio, cantidad });
      pedido.total += precio * cantidad;
      await pedido.save();
  
      return NextResponse.json({ message: 'Producto añadido al carrito' });
      
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return NextResponse.json({ message: 'Token inválido o expirado' }, { status: 403 });
    }
  }