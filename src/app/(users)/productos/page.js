import Link from "next/link";

async function fetchProductos() {
  const res = await fetch('https://hfc-tienda-8fj7.onrender.com/productos', { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error('Error al obtener los productos');
  }
  return res.json();
}

export default async function ProductosPage() {
  const productos = await fetchProductos();

  console.log(productos);
  return (
    <main className="main">
      <section className="product__title">
        <h3 className="design__title">Productos</h3>
      </section>
      <div className="container-design">
        {productos.map((producto) => (
          <div key={producto._id} className="design__item">
            <Link href={`/productos/${producto._id}`}>
              <img
                className="design__img"
                src={producto.imagen || "default.jpg"}
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
}