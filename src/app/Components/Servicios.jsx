import React from "react";

const Servicios = () => {
    return (
        <main class="main">
            <section class="service__title">
                <h3 class="design__title">Servicios</h3>
            </section> 
            <br />
            <section class="container-tips">
                <div class="design__item">
                    <h3 class="design__title">CORTES Y PEINADOS</h3>
                    <img src="./img/servicios/1.jpg" class="design__img" />
                </div>
                <div class="container-box">
                    <div class="box">
                        <div class="box__content">
                            <p class="box__txt">Cortes de mujer, hombre, niño (hasta 10 años), chasquilla/flequillo. Cualquiera a elección (por separado). Cabello corto: $20.000, medio: $40.000, largo: $60.000.</p>   
                            <p class="box__txt">Brushing (Peinar en Alta Temperatura). Cabello corto: $5.000, medio: $10.000, largo: $15.000.</p>
                            <p class="box__txt">Alisado plastificado, permanente o keratina. Cualquiera a elección (por separado). Cabello corto: $40.000, medio: $60.000, largo: $90.000.</p>  
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <hr style={{color: 'pink'}} />
            <section class="container-tips">
                <div class="design__item">
                    <h3 class="design__title">COLORACIONES</h3>
                    <img src="./img/servicios/2.jpg" class="design__img" />
                </div>
                <div class="container-box">
                    <div class="box">
                        <div class="box__content">
                            <p class="box__txt">Pigmentaciones con tinturas Hair Fashion Colors (precio por color). Cabello corto: $20.000, medio: $30.000, largo: $40.000.</p>
                            <p class="box__txt">Pigmentaciones con tinturas Pravana (precio por color). Cabello corto: $35.000, medio: $45.000, largo: $55.000.</p>   
                            <p class="box__txt">Pigmentaciones con otras tinturas a elección (precio por color). Cabello corto: $50.000, medio: $60.000, largo: $70.000.</p>      
                            <p class="box__txt">Decoloraciones. Cabello corto: $25.000, medio: $40.000, largo: $60.000.</p>                       
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <hr style={{color: 'pink'}} />
            <section class="container-tips">
                <div class="design__item">
                    <h3 class="design__title">REPARACIÓN CAPILAR</h3>
                    <img src="./img/servicios/reparacion.jpg" class="design__img" />
                </div>
                <div class="container-box">
                    <div class="box">
                        <div class="box__content">
                            <p class="box__txt">Lavado profundo (lavado con productos purificantes para eliminar residuos de sebo e impurezas). Cabello corto: $25.000, medio: $35.000, largo: $50.000.</p>
                            <p class="box__txt">Tratamiento Anti-frizz con Olaplex. Cabello corto: $50.000, medio: $60.000, largo: $70.000.</p>                        
                            <p class="box__txt">Lifting capilar (rejuvenecimiento del cabello). Cabello corto: $70.000, medio: $80.000, largo: $90.000.</p>
                            <p class="box__txt">Botox capilar. Cabello corto: $80.000, medio: $90.000, largo: $100.000.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr style={{color: 'pink'}} />
            <a href="agenda.php" class="welcome__btn" style={{textAlign: 'center'}}>Agendar Cita</a>
            <br>
            </br>
        </main> 
    )
}

export default Servicios;