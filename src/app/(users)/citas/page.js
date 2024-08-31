'use client';
import React, { useEffect, useState } from 'react';

const Citas = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const res = await fetch('/api/citas', {
          headers: {
            Authorization: `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setCitas(data);
        } else {
          console.error('Error al obtener las citas:', data);
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchCitas();
  }, []);

  return (
    <main>
      <h2>Tus Citas</h2>
      {citas.length > 0 ? (
        <ul>
          {citas.map((cita) => (
            <li key={cita._id}>
              {cita.fechaHora} - {cita.servicio} ({cita.alturacabello})
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes citas agendadas.</p>
      )}
    </main>
  );
};

export default Citas;
