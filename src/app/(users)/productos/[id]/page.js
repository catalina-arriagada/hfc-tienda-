'use client'
import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';

async function fetchProduct(id) {
  
  const res = await fetch(`http://localhost:5000/productos/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export default async function ProductPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Verificar si el usuario está autenticado
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // Si no hay token, redirigir al login
    if (!token) {
      router.push('/login');
      return;
    }

    // Intentar cargar el producto
    const loadProduct = async () => {
      try {
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (err) {
        setError('Error al cargar el producto.');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, router]);

  if (loading) return <p>Cargando...</p>;
  if (error) return router.push('/login');
  ;

  return (
    <main className="main">
      <h1>{product.nombre}</h1>
      <img src={`/${product.imagen}`} alt={product.nombre} />
      <p>Precio: ${product.precio}</p>
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
