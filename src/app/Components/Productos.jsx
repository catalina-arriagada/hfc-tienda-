import React from "react";
import Link from "next/link";

export async function getServerSideProps() {
  // Llamada a la API para obtener los productos
  const res = await fetch('https://hfc-tienda-8fj7.onrender.com/productos');
  const productos = await res.json();
  console.log('Error getServerProp: ', productos);
  return {
    props: {
      productos, // Pasar productos como prop
    },
  };
}

const Productos = ({ productos = [] }) => {
  if (!productos.length) {
    return <div>No hay productos disponibles</div>;
  }
  return (
    <main className="main">
      <section className="product__title">
        <h3 className="design__title">Productos</h3>
      </section>
      <div className="container-design">
        {productos.map((producto) => (
          <div className="design__item" key={producto.id}>
            <Link href={`/productos/${encodeURIComponent(producto.id)}`}>
              <img
                className="design__img"
                src="img/productos/1o.jpg"
                alt={producto.nombre}
              />
              <div>
                <p className="design__title">
                  {producto.nombre}
                  <br />
                  <br />
                  ${producto.precio}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Productos;
