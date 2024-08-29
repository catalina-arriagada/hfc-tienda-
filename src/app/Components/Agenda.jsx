'use client'
import React from "react";
import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';

const Agenda = () => {
    const router = useRouter();

    // Verificar si el usuario está autenticado
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // Si no hay token, redirigir al login
    if (!token) {
      setTimeout(() => {
        alert('Debe iniciar sesión');
      }, 1000);
      router.push('/login');
      return;
        }
    }
  )

    return(
        <main className="main">
        <section className="service__title">
            <h3 className="design__title">Agendar Cita</h3>
        </section>
        <section className="container-testimonials">
            <form method="POST">  
              <h3 className="section__title">Pide tu cita para nuestro salón de belleza aquí y te contactaremos a la brevedad</h3>
              <p className="testimonials__txt" style={{color: "red", marginTop: "15px"}}>* Campos obligatorios</p> 
            <div className="testimonials__txt">
                <label>Fecha de Cita<span style={{color: "red"}}>*</span></label>
                <input type="date" name="fecha" min="2022-07-05" max="2022-12-30" placeholder="mm/dd/aaaa" />      
            </div>
            <div className="testimonials__txt">
                <label>Hora de Cita<span style={{color: "red"}}>*</span></label>
                <input type="time" name="hora" min="11:30" max="17:00" placeholder="12:30" />      
            </div>
         		<div className="testimonials__txt">
         		 <label>Servicio Solicitado<span style={{color: "red"}}>*</span></label>
            <select name="servicioId" required="required">
         		   	<option value="0" disabled selected>Seleccione...</option>
                    <option value="1">Corte</option>
                    <option value="2">Teñir</option>
            </select> 	
         		</div>
                <div className="testimonials__txt">
                <label>Altura del Cabello<span style={{color: "red"}}>*</span></label>
                <select name="cabello" required="required">
                  <option value="" disabled selected>Seleccione...</option>
                  <option value="corto">Corto</option>
                  <option value="medio">Medio</option>
                  <option value="largo">Largo</option>                                             
                </select>  
               </div>
               <p className="testimonials__txt" style={{marginTop: '15px', color: 'red'}}>Altura del cabello Corto: hasta abajo de las orejas, Medio: hasta los hombros, Largo: hasta la cintura.</p> 
         		<div className="testimonials__txt">
         			<label>Información extra:</label>
              <br />
              <br />
         			<textarea name="comentarios" placeholder="Ingrese información extra sobre su pedido aquí" rows="6" style={{width: "100%"}}></textarea>
         		</div>
               <div className="testimonials__txt">
                <input type="submit" value="Agendar" className="welcome__btn" name="agendado" />
         		</div>	
         	</form>       
        </section>
    </main>
    )
}

export default Agenda;