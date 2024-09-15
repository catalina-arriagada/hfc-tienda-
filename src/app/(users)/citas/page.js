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

        const response = await fetch('https://hfc-tienda-8fj7.onrender.com/api/citas', {
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

      const response = await fetch(`https://hfc-tienda-8fj7.onrender.com/api/citas/${editCita._id}`, {
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

  // Función para eliminar una cita
const eliminarCita = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No autorizado');
      return;
    }

    const response = await fetch(`https://hfc-tienda-8fj7.onrender.com/api/citas/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error al eliminar la cita');
    }

    // Actualizar la lista de citas removiendo la cita eliminada
    setCitas(citas.filter(cita => cita._id !== id));
    alert('Cita eliminada');
  } catch (err) {
    setError('Error al eliminar la cita');
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
    <main className='main'>
      <h3 className="producto_titulo">Mis Citas</h3>
      <hr />
      {citas.length > 0 ? (
        citas.map(cita => (
          <div key={cita._id}>
            <p className="testimonials__txt"><b>Cita Número </b>{cita._id}</p>
            <p className="testimonials__txt"><b>Fecha y Hora: </b>{new Date(cita.fechaHora).toLocaleString()}</p>
            <p className="testimonials__txt"><b>Servicio: </b>{cita.servicio}</p>
            <p className="testimonials__txt"><b>Altura del Cabello: </b>{cita.alturacabello}</p>
            <p className="testimonials__txt"><b>Comentarios: </b>{cita.comentarios}</p>
            <button className="welcome__btn" onClick={() => setEditCita(cita)}>Reagendar</button>
            <br></br>
            <button className="welcome__btn" onClick={() => eliminarCita(cita._id)}>Eliminar</button>
            <br></br>
            <br></br>
            <hr />
          </div>
          
        ))
      ) : (
        <div>
          <p className="testimonials__txt"><b>No hay citas disponibles.</b></p>
          <button href='/agenda' className="welcome__btn">Agendar Cita</button>
        </div>
        
      )}

      {editCita && (

        <div>
          <h3 className="section__title">
          Editar Cita
          </h3>
          <p className="testimonials__txt" style={{ color: 'red', marginTop: '15px' }}>
          * Campos obligatorios
          </p>
          <div className="testimonials__txt">
          <label>
            Fecha y Hora de Cita<span style={{ color: 'red' }}>*</span>
          </label>
          <input type="datetime-local"
                name="fechaHora"
                value={new Date(editCita.fechaHora).toISOString().slice(0, -1)}
                onChange={handleEditChange}
                />
          </div>
          <div className="testimonials__txt">
          <label>
            Servicio Solicitado<span style={{ color: 'red' }}>*</span>
          </label>
          <select name="servicio"
                value={editCita.servicio}
                onChange={handleEditChange}>
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
          <select name="alturacabello"
                value={editCita.alturacabello}
                onChange={handleEditChange}
                placeholder="Altura del cabello" required>
            <option value="" disabled>
              Seleccione...
            </option>
            <option value="corto">Corto</option>
            <option value="medio">Medio</option>
            <option value="largo">Largo</option>
          </select>
          </div>
          <div className="testimonials__txt">
          <label>Información extra:</label>
          <textarea
            name="comentarios"
            value={editCita.comentarios || ''}
            onChange={handleEditChange}
            placeholder="Ingrese información extra sobre su pedido aquí"
            rows="6"
            style={{ width: '100%' }}
          ></textarea>
          </div>

          <div className="testimonials__txt">
          <button className="welcome__btn" onClick={reagendarCita}>Confirmar cambios</button>
          <br />
          </div>

        </div>
      )}
    </main>
  );
};

export default CitasPage;
