import React from "react";
import Link from "next/link";

const Carritos = () => {
  return (
    <main className="main">
      <div className="container-testimonials">
        <h2 className="section__title">Mi carrito de compras</h2>
        <a
          href="/productos"
          className="welcome__btn"
          style="text-align: center;"
          id="agregarProducto"
        >
          Agregar más productos
        </a>
        <br />
        <hr />
        <a href="/productos/pedido" style="padding-left:34%;">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="TUNX8BRWUZWLW" />
          <input
            type="image"
            src="https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </a>
        <a
          href="/productos/pedido"
          className="welcome__btn"
          style="text-align: center;"
        >
          Terminar Compra
        </a>
      </div>
    </main>
  );
};

export default Carritos;
