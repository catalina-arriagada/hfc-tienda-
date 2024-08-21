'use client'
import React, { useState } from "react";

const Login = () => {

    const [nombre, setNombre] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, contrasenia }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Error al iniciar sesión');
                setSuccess('');
            } else {
                setSuccess(data.mensaje);
                setError('');
                // Redirige o maneja el éxito aquí
            }
        } catch (err) {
            setError('Error en la conexión');
            setSuccess('');
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
                        <input type="text" pattern="[a-zA-Z0-9]+" id="nombre" name="nombre" placeholder="luisperez123" className="input" value={nombre}
                            onChange={(e) => setNombre(e.target.value)} required />
                        <br />
                    </div>
                    <div className="testimonials__txt">
                        <label htmlFor="contrasenia">Contraseña:</label>
                        <input type="password" id="contrasenia" name="contrasenia" className="input" value={contrasenia}
                            onChange={(e) => setContrasenia(e.target.value)} required />
                        <br />
                    </div>
                    <div className="testimonials__txt">
                        <input type="submit" value="Ingresa" name="btn_loguear" />
                    </div>  
                </form>
                <h3 className="section__title">Si no tienes cuenta Regístrate aquí, ¡Es gratis!</h3>
                <a href="/registro" className="welcome__btn">Registrarme</a>
                <a href="/deslogueo" className="welcome__btn">Cerrar Sesión</a>
            </section>
        </main>
    )
}

export default Login;