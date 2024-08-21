'use client'
import React from 'react';
import { useRouter } from 'next/router';
import mongoose from 'mongoose';

const Producto = ({ producto }) => {
  const router = useRouter();

  // Muestra un mensaje de carga si la página aún no está generada
  if (router.isFallback) {
    return <div>Cargando...</div>;
  }
  return (
    <main className="main">
      <form method="POST" className="formulario" action="carritos">
        <h3 className="producto_titulo">{producto.nombre}</h3>
        <div className="producto">
          <img className="producto_imagen" src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
          <div className="producto_contenido">
            <div className="form-c">
              <select className="formulario__campo" name="colorId">
                <option disabled selected>
                  -- Selecciona Color --
                </option>
              </select>
            </div>
            <div className="form-c">
              <select className="formulario__campo" name="tamanoId">
                <option disabled selected>
                  -- Selecciona Tamano --
                </option>
              </select>
            </div>
            <div className="form-c">
              <input
                className="formulario__campo"
                value="Cantidad:"
                readonly
                onmousedown="return false"
              ></input>
            </div>
            <div className="form-c">
              <input
                className="formulario__campo"
                type="number"
                placeholder="Cantidad"
                min="1"
                max="99"
                value="1"
                name="cantidad"
              ></input>
            </div>
            <div>
              <input
                className="formulario__submit"
                type="submit"
                value="agregar"
              />
              <br />
              <a
                className="formulario__submit"
                href="carritos"
                style={{ backgroundColor: "silver" }}
              >
                Mi carrito
              </a>
              <br />
            </div>
          </div>
        </div>
      </form>
    </main>
   );
};

export async function getStaticPaths() {
    // Conectar a la base de datos para obtener los IDs de los productos
    await mongoose.connect(process.env.MONGODB_URI);
  
    const Producto = mongoose.model('Producto', new mongoose.Schema({
      nombre: String,
      imagen: String,
      // Otros campos
    }));
  
    const productos = await Producto.find({}).select('_id').exec();
    
    const paths = productos.map((producto) => ({
      params: { id: producto._id.toString() },
    }));
  
    return {
      paths,
      fallback: true, // o 'blocking' dependiendo de tus necesidades
    };
  }
  
  export async function getStaticProps({ params }) {
    // Conectar a la base de datos para obtener los detalles del producto
    await mongoose.connect(process.env.MONGODB_URI);
  
    const Producto = mongoose.model('Producto', new mongoose.Schema({
      nombre: String,
      imagen: String,
      precio: String
    }));
  
    const producto = await Producto.findById(params.id).lean();
  
    return {
      props: {
        producto: JSON.parse(JSON.stringify(producto)),
      },
    };
  }

export default Producto;
