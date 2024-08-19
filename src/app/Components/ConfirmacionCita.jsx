import React from "react";

const ConfirmacionCita = () => {
    return (
        <main className="main">
            <h3 className="producto_titulo">Presentarse con este comprobante 20 minutos antes de la hora de su cita.</h3>
            <dl>
                <dt className="testimonials__txt"><b>Usuario:</b></dt>
                <p className="testimonials__txt" value "">nombre</p>
                <dt className="testimonials__txt"><b>Fecha de Cita:</b></dt> 
                <p className="testimonials__txt">fecha</p>
                <dt className="testimonials__txt"><b>Hora de Cita:</b></dt>
                <p className="testimonials__txt">hora</p>
                <dt className="testimonials__txt"><b>Servicio/s Solicitado/s:</b></dt>
                <p className="testimonials__txt">nombre</p>
                <dt className="testimonials__txt"><b>Altura del Cabello:</b></dt>
                <p className="testimonials__txt">cabello</p>
            </dl>
            <br/>
            <h3 className="testimonials__txt" style={{color: "red"}}>*Se ha enviado una copia de este comprobante a su email.</h3>
            <a href="index.php" className="welcome__btn">Volver al inicio</a>
            <br />
            <br />
            <hr />
        </main>
    )
}

export default ConfirmacionCita;