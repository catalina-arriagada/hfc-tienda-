'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Agenda = () => {
  const [fechaHora, setFechaHora] = useState('');
  const [servicio, setServicio] = useState('');
  const [alturacabello, setAlturaCabello] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const agendarCita = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      const response = await fetch('https://hfc-tienda-8fj7.onrender.com/api/citas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ fechaHora, servicio, alturacabello, comentarios }),
      });

      if (!response.ok) {
        throw new Error('Error al agendar la cita');
      }

      setSuccess('Cita agendada con éxito');
      setError('');
      router.push('/citas');
    } catch (err) {
      console.error('Error al agendar la cita:', err);
      setError('Error al agendar la cita');
      setSuccess('');
    }
  };

  return (

    <main className="main">
      <section className="service__title">
        <h3 className="design__title">Agendar Cita</h3>
      </section>
      <section className="container-testimonials">
        <form onSubmit={agendarCita}>
          <h3 className="section__title">
            Pide tu cita para nuestro salón de belleza aquí y te contactaremos a la brevedad
          </h3>
          <p className="testimonials__txt" style={{ color: 'red', marginTop: '15px' }}>
            * Campos obligatorios
          </p>
          <div className="testimonials__txt">
            <label>
              Fecha y Hora de Cita<span style={{ color: 'red' }}>*</span>
            </label>
            <input type="datetime-local" value={fechaHora} onChange={(e) => setFechaHora(e.target.value)} required />
          </div>
          <div className="testimonials__txt">
            <label>
              Servicio Solicitado<span style={{ color: 'red' }}>*</span>
            </label>
            <select name="servicio" type="text" value={servicio} onChange={(e) => setServicio(e.target.value)} placeholder="Servicio" required>
              <option value="" disabled>
                Seleccione...
              </option>
              <option value="Corte">Corte</option>
              <option value="Teñir">Teñir Cabello</option>
              <option value="Alisado">Alisado</option>
              <option value="Lavado">Lavado</option>
              <option value="Cuidado">Cuidado General</option>
            </select>
          </div>
          <div className="testimonials__txt">
            <label>
              Altura del Cabello<span style={{ color: 'red' }}>*</span>
            </label>
            <select name="alturacabello" type="text" value={alturacabello} onChange={(e) => setAlturaCabello(e.target.value)} placeholder="Altura del cabello" required>
              <option value="" disabled>
                Seleccione...
              </option>
              <option value="corto">Corto</option>
              <option value="medio">Medio</option>
              <option value="largo">Largo</option>
            </select>
          </div>
          <p className="testimonials__txt" style={{ marginTop: '15px', color: 'red' }}>
            Altura del cabello Corto: hasta abajo de las orejas, Medio: hasta los hombros, Largo: hasta la cintura.
          </p>
          <div className="testimonials__txt">
            <label>Información extra:</label>
            <textarea
              name="comentarios"
              value={comentarios} onChange={(e) => setComentarios(e.target.value)}
              placeholder="Ingrese información extra sobre su pedido aquí"
              rows="6"
              style={{ width: '100%' }}
            ></textarea>
          </div>
          <div className="testimonials__txt">
            <button type="submit" className="welcome__btn">Agendar</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <br />
            <a href="/citas"className="welcome__btn" >Ver mis citas</a>
          </div>
        </form>
      </section>
    </main>

  );
};

export default Agenda;
