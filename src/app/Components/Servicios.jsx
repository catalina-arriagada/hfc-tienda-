

const Servicios = () => {

  return (
    <main className="main">
      <section className="service__title">
        <h3 className="design__title">Servicios</h3>
      </section>
      <br />
      <section className="container-tips">
        <div className="design__item">
          <h3 className="design__title">CORTES Y PEINADOS</h3>
          <img src="./img/servicios/1.jpg" className="design__img" />
        </div>
        <div className="container-box">
          <div className="box">
            <div className="box__content">
              <p className="box__txt">
                Cortes de mujer, hombre, niño (hasta 10 años),
                chasquilla/flequillo. Cualquiera a elección (por separado).
                Cabello corto: $20.000, medio: $40.000, largo: $60.000.
              </p>
              <p className="box__txt">
                Brushing (Peinar en Alta Temperatura). Cabello corto: $5.000,
                medio: $10.000, largo: $15.000.
              </p>
              <p className="box__txt">
                Alisado plastificado, permanente o keratina. Cualquiera a
                elección (por separado). Cabello corto: $40.000, medio: $60.000,
                largo: $90.000.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <hr style={{ color: "pink" }} />
      <section className="container-tips">
        <div className="design__item">
          <h3 className="design__title">COLORACIONES</h3>
          <img src="./img/servicios/2.jpg" className="design__img" />
        </div>
        <div className="container-box">
          <div className="box">
            <div className="box__content">
              <p className="box__txt">
                Pigmentaciones con tinturas Hair Fashion Colors (precio por
                color). Cabello corto: $20.000, medio: $30.000, largo: $40.000.
              </p>
              <p className="box__txt">
                Pigmentaciones con tinturas Pravana (precio por color). Cabello
                corto: $35.000, medio: $45.000, largo: $55.000.
              </p>
              <p className="box__txt">
                Pigmentaciones con otras tinturas a elección (precio por color).
                Cabello corto: $50.000, medio: $60.000, largo: $70.000.
              </p>
              <p className="box__txt">
                Decoloraciones. Cabello corto: $25.000, medio: $40.000, largo:
                $60.000.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <hr style={{ color: "pink" }} />
      <section className="container-tips">
        <div className="design__item">
          <h3 className="design__title">REPARACIÓN CAPILAR</h3>
          <img src="./img/servicios/reparacion.jpg" className="design__img" />
        </div>
        <div className="container-box">
          <div className="box">
            <div className="box__content">
              <p className="box__txt">
                Lavado profundo (lavado con productos purificantes para eliminar
                residuos de sebo e impurezas). Cabello corto: $25.000, medio:
                $35.000, largo: $50.000.
              </p>
              <p className="box__txt">
                Tratamiento Anti-frizz con Olaplex. Cabello corto: $50.000,
                medio: $60.000, largo: $70.000.
              </p>
              <p className="box__txt">
                Lifting capilar (rejuvenecimiento del cabello). Cabello corto:
                $70.000, medio: $80.000, largo: $90.000.
              </p>
              <p className="box__txt">
                Botox capilar. Cabello corto: $80.000, medio: $90.000, largo:
                $100.000.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ color: "pink" }} />
      <a href="/agenda" className="welcome__btn" style={{ textAlign: "center" }}>
        Agendar Cita
      </a>
      <br />
    </main>
  );
};

export default Servicios;
