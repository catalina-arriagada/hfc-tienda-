import React from "react";

const Index = () => {
  
  return (
    <>
      <main className="main">
        <section className="welcome">
          <h2 className="section__title">¡Bienvenid@!</h2>
          <p className="welcome__txt">
            {" "}
            Somos una tienda especializada en tinturas veganas color fantasía, y
            productos de estética capilar. También somos un Salón de Belleza
            especializado en coloración y cuidado capilar.
          </p>
          <a href="preguntasfrecuentes.php" class="welcome__btn">
            MÁS INFO
          </a>
        </section>
        <section className="container-design">
          <div className="design__item">
            <h3 className="design__title">Tinturas Temporales y Artesanales</h3>
            <img src="./img/15.jpg" alt="" className="design__img" />
          </div>
          <div className="design__item">
            <h3 className="design__title">Tinturas Semi-permanentes Pravana</h3>
            <img src="./img/16.jpg" alt="" className="design__img" />
          </div>
          <div className="design__item">
            <h3 className="design__title">Cuidado Capilar</h3>
            <img src="./img/cuidado.jpg" alt="" className="design__img" />
          </div>
          <div className="design__item">
            <h3 className="design__title">Decolorantes</h3>
            <img src="./img/deco.jpg" alt="" className="design__img" />
          </div>
        </section>

        <section className="container-testimonials">
          <h3 className="section__title">NUESTROS CLIENTES</h3>
          <img src="./img/cliente1.png" alt="" className="testimonials__img" />
          <p className="testimonials__txt">
            ¡Me encantan las tinturas de Hair Fashion Colors! El "Rojo" me vino
            de maravilla, y le dí un toque más rosa para que combinara con mi
            pelo. Y nos queda el verde, celeste, negro y morado. Mi estudio
            fotográfico Pedrito Marinello está muy contento con los resultados,
            100% recomendado.
          </p>
          <p className="testimonials__name">Sandra Velez</p>
        </section>

        <section className="container-tips">
          <div className="design__item">
            <h3 className="design__title">Servicios de Peluquería</h3>
            <img src="./img/pelu.jpg" alt="" className="design__img" />
          </div>
          <div className="container-box">
            <div className="box">
              <div className="box__icon">
                <i className="fas fa-cog"></i>
              </div>
              <div className="box__content">
                <h3 className="box__title">CORTES Y PEINADOS</h3>
                <p className="box__txt">
                  Cortes de mujer, hombre, niño (hasta 10 años), Corte
                  chasquilla/flequillo, Brushing, alisados, etc.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box__icon">
                <i className="fas fa-university"></i>
              </div>
              <div className="box__content">
                <h3 className="box__title">COLORACIONES</h3>
                <p className="box__txt">
                  Retoques, pigmentaciones, decoloraciones, despigmentación,
                  iluminación, etc.{" "}
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box__icon">
                <i className="fas fa-wrench"></i>
              </div>
              <div className="box__content">
                <h3 className="box__title">REPARACIÓN CAPILAR</h3>
                <p className="box__txt">
                  Anti-frizz, moldeados, lavados, Olaplex, Botox capilar, etc.
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
      </main>
    </>
  );
};

export default Index;
