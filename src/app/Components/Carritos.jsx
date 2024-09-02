'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

const Carritos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          //setError('No autorizado');
          setLoading(false);
          router.push("/login");

          return;
        }

        const response = await fetch('/api/pedidos', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          router.push("/login");

        }

        const data = await response.json();
        setPedidos(data);
      } catch (err) {
        setError('Error al obtener los pedidos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  const eliminarProducto = async (pedidoId, productoId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No autorizado');
        return;
      }

      const response = await fetch(`/api/pedidos/${pedidoId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productoId })
      });
      
      if (!response.ok) {
        throw new Error('Error al eliminar el producto');
      }

      // Actualizar la lista de pedidos
      setPedidos(pedidos.map(pedido => {
        if (pedido._id === pedidoId) {
          return {
            ...pedido,
            productos: pedido.productos.filter(producto => producto._id !== productoId),
            total: pedido.productos
              .filter(producto => producto._id !== productoId)
              .reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
          };
        }
        return pedido;
      }));

      alert('Producto eliminado del carrito');
    } catch (err) {
      setError('Error al eliminar el producto');
      console.error(err);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <main className="main">
      <div className="container-testimonials">
        <h2 className="section__title">Mi carrito de compras</h2>
        <a
          href="/productos"
          className="welcome__btn"
          style={{ textAlign: 'center' }}
          id="agregarProducto"
        >
          Agregar más productos
        </a>
        <br />
        <hr />
        {pedidos.length > 0 ? (
          pedidos.map((pedido) => (
            <div key={pedido._id} className="pedido">
             {/*<h3>Pedido ID: {pedido._id}</h3>
              <p>Usuario: {pedido.nombreUsuario}</p> */} 
              <ul>
                {pedido.productos.map((producto, index) => (
                  <li key={index}>
                    {producto.nombre} - ${producto.precio} x {producto.cantidad}
                    <button onClick={() => eliminarProducto(pedido._id, producto._id)}>
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <p>Total: ${pedido.total}</p>
            </div>
          ))
        ) : (
          <p>No hay pedidos en el carrito.</p>
        )}
        {/* <a
          href="/productos/pedido"
          style={{ paddingLeft: '34%' }}
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="TUNX8BRWUZWLW" />
          <input
            type="image"
            src="https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </a> */}
        <a
          href="/paypal"
          className="welcome__btn"
          style={{ textAlign: 'center' }}
        >
          Terminar Compra
        </a>
      </div>
    </main>
  );
};

export default Carritos;
