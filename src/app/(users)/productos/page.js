import Link from "next/link";

const TIMEOUT_MS = 10000; // 10 segundos

async function fetchProductos() {
  const fetchPromise = fetch('https://hfc-tienda-8fj7.onrender.com/productos', { cache: 'no-store' });
  
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request timed out')), TIMEOUT_MS)
  );
  
  try {
    const res = await Promise.race([fetchPromise, timeoutPromise]);

    if (!res.ok) {
      throw new Error('Error al obtener los productos');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    // Puedes manejar el error de forma más apropiada aquí
    return []; // Devuelve un array vacío o maneja el error según lo necesites
  }
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
        {productos.length > 0 ? (
          productos.map((producto) => (
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
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </main>
  );
}
