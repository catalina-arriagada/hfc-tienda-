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

      const response = await fetch('/api/citas', {
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
    <form onSubmit={agendarCita}>
      <h1>Agendar Cita</h1>
      <input type="datetime-local" value={fechaHora} onChange={(e) => setFechaHora(e.target.value)} required />
      <input type="text" value={servicio} onChange={(e) => setServicio(e.target.value)} placeholder="Servicio" required />
      <input type="text" value={alturacabello} onChange={(e) => setAlturaCabello(e.target.value)} placeholder="Altura del cabello" required />
      <textarea value={comentarios} onChange={(e) => setComentarios(e.target.value)} placeholder="Comentarios"></textarea>
      <button type="submit">Agendar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <a href="/citas">Ver mis citas</a>
    </form>
  );
};

export default Agenda;
