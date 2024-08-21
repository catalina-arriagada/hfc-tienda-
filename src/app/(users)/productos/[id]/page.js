import React from 'react';

async function fetchProduct(id) {
  const res = await fetch(`http://localhost:5000/productos/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export default async function ProductPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <main className="main">
      <h1>{product.nombre}</h1>
      <img src={`/${product.imagen}`} alt={product.nombre} />
      <p>Precio: ${product.precio}</p>
    </main>
  );
}
