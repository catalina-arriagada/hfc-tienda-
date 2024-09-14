'use client'
import React, { useState } from "react";
import axios from 'axios';

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hfc-tienda-8fj7.onrender.com/usuarios', {
        nombre,
        contrasenia
      });
      console.log('Usuario creado: ', response.data);
      alert("Formulario enviado exitosamente");

      // Limpia los campos del formulario
      setNombre("");
      setContrasenia("");
    } catch (error) {
      console.error('Error creando usuario:', error);
      alert('Error al crear el usuario');
    }
  };

  return (
    <main className="main">
      <section className="info">
        <h3 className="design__title">Regístrate</h3>
      </section>
      <section className="container-testimonials">
        <form method="post" name="f1" onSubmit={handleSubmit}>
          <h3 className="section__title">Regístrate y pide productos o citas a nuestro salón de belleza</h3>
          <div className="testimonials__txt">
            <label htmlFor="nombre">Nombre de usuario:</label>
            <input
              type="text"
              pattern="[a-zA-Z0-9]+"
              name="nombre"
              placeholder="luisperez123"
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
              name="contrasenia"
              placeholder="********"
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)}
              required
            />
            <br />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default Registro;
