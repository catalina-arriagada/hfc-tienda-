'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Login() {
  const [nombre, setNombre] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const response = await fetch('https://hfc-tienda-8fj7.onrender.com/api/usuarios/validar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, contrasenia }),
    });

      const result = await response.json();

      if (response.ok) {
        // Guardar el token en localStorage
        localStorage.setItem('token', result.token);
        setMensaje(result.message);
        alert(result.message);
        setTimeout(() => {
          router.push('/'); // Redirigir a la página principal
        }, 2000);
        
      } else {
        setError(result.error);
      }
  } catch (error) {
      setError('Error en la validación del usuario');
    }
  };

  return(
    <main className="main">
      <section className="info">
        <h3 className="design__title">Ingresa a tu cuenta</h3>
      </section>
      <section className="container-testimonials">
        <form onSubmit={handleSubmit}>
          <div className="testimonials__txt">
            <label htmlFor="nombre">Nombre de usuario:</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              placeholder="luisperez123" 
              className="input"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required 
            />
            <br />
          </div>
          <div className="testimonials__txt">
            <label htmlFor="contrasenia">Contraseña:</label>
            <input 
              type="password" 
              id="contrasenia" 
              name="contrasenia" 
              className="input" 
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)} 
              required 
            />
            <br />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
          <div className="testimonials__txt">
            <input type="submit" value="Ingresa" name="btn_loguear" />
          </div>  
        </form>
        <h3 className="section__title">Si no tienes cuenta Regístrate aquí, ¡Es gratis!</h3>
        <a href="/registro" className="welcome__btn">Registrarme</a>
        <a href="/deslogueo" className="welcome__btn">Cerrar Sesión</a>
      </section>
    </main>
  );
}