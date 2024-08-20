'use client'
import React, { useEffect } from 'react';

const Deslog = () => {
  useEffect(() => {
    alert('¡No existe una sesión abierta!');
    window.location.assign("login");
  }, []);

  return (
    <div>
      <p>No hay una sesión activa</p>
    </div>
  );
}

export default Deslog;