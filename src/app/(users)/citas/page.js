'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CitasPage = () => {
  const [citas, setCitas] = useState([]);
  const [editCita, setEditCita] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  // Obtener citas del usuario al cargar la página
  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        const response = await fetch('/api/citas', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Error al obtener las citas');
        }

        const data = await response.json();
        setCitas(data);
      } catch (err) {
        setError('Error al obtener las citas');
        console.error(err);
      }
    };

    fetchCitas();
  }, [router]);

  // Función para editar una cita
  const reagendarCita = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No autorizado');
        return;
      }

      const response = await fetch(`/api/citas/${editCita._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editCita)
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la cita');
      }

      // Actualizar la lista de citas
      setCitas(citas.map(cita => cita._id === editCita._id ? editCita : cita));

      setEditCita(null); // Limpiar el estado de edición
      alert('Cita actualizada');
    } catch (err) {
      setError('Error al actualizar la cita');
      console.error(err);
    }
  };

  // Manejar el cambio en los campos de edición
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditCita(prev => ({ ...prev, [name]: value }));
  };

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <main>
      <h1>Mis Citas</h1>
      {citas.length > 0 ? (
        citas.map(cita => (
          <div key={cita._id}>
            <p>Fecha y Hora: {new Date(cita.fechaHora).toLocaleString()}</p>
            <p>Servicio: {cita.servicio}</p>
            <p>Altura del Cabello: {cita.alturacabello}</p>
            <p>Comentarios: {cita.comentarios}</p>
            <button onClick={() => setEditCita(cita)}>Reagendar</button>
            <button onClick={() => eliminarCita(cita._id)}>Eliminar</button>
          </div>
        ))
      ) : (
        <p>No hay citas disponibles.</p>
      )}

      {editCita && (
        <div>
          <h2>Editar Cita</h2>
          <label>
            Fecha y Hora:
            <input
              type="datetime-local"
              name="fechaHora"
              value={new Date(editCita.fechaHora).toISOString().slice(0, -1)}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Servicio:
            <input
              type="text"
              name="servicio"
              value={editCita.servicio}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Altura del Cabello:
            <input
              type="text"
              name="alturacabello"
              value={editCita.alturacabello}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Comentarios:
            <textarea
              name="comentarios"
              value={editCita.comentarios || ''}
              onChange={handleEditChange}
            />
          </label>
          <button onClick={reagendarCita}>Confirmar</button>
        </div>
      )}
    </main>
  );
};

export default CitasPage;
