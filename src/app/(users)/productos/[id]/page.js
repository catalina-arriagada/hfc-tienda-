"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

async function fetchProduct(id) {
  const res = await fetch(`http://localhost:5000/productos/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export default async function ProductPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cantidad, setCantidad] = useState(1);

  // Verificar si el usuario está autenticado
  useEffect(() => {
    const token = localStorage.getItem("token");

    // Si no hay token, redirigir al login
    if (!token) {
      router.push("/login");
      return;
    }

    // Intentar cargar el producto
    const loadProduct = async () => {
      try {
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (err) {
        setError("Error al cargar el producto.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, router]);

  //Añadir producto al carrito
  const agregarAlCarrito = async () => {
    try {
      const res = await fetch("/api/pedido", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          productoId: id,
          nombre: product.nombre,
          precio: product.precio,
          cantidad,
        }),
      });

      if (!res.ok) {
        throw new Error("Error al añadir al carrito");
      }

      alert("Producto añadido al carrito");
    } catch (error) {
      console.error("Error en la ruta /api/pedido:", error);
      alert("Error al añadir al carrito");
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return router.push("/login");
  return (
    <main className="main">
      <h1>{product.nombre}</h1>
      <img src={`/${product.imagen}`} alt={product.nombre} />
      <p>Precio: ${product.precio}</p>
      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={(e) => setCantidad(parseInt(e.target.value))}
      />
      <button onClick={agregarAlCarrito}>Añadir al Carrito</button>
      <br />
        <a
          className="formulario__submit"
          href="/carrito"
          style={{ backgroundColor: "silver" }}
        >
          Ver mi carrito
        </a>
      <br />
    </main>
  );
}

//const [isAuthenticated, setIsAuthenticated] = useState(false);
// const router = useRouter();
// useEffect(() => {
//   const token = localStorage.getItem('token');

//   if (!token) {
//     router.push('/login'); // Redirige al login si no hay token
//   } else {
//     setIsAuthenticated(true);
//     // Aquí verificar el token con el backend si es necesario
//   }
// }, [router]);

// if (!isAuthenticated) return <p>Redirigiendo...</p>;
