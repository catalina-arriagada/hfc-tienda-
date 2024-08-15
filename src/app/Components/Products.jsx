import React from "react";
import Header from './Header';
import Footer from './Footer';

const Products = () => {
    return (
        <>
            <Header />
                <main className="main">
                    <section className="product__title">
                        <h3 className="design__title">Productos</h3>
                    </section> 
                    <div className="container-design">     
                        <div className="design__item"> 
                            <a href="">
                                <img className="design__img" src="img/productos/1o.jpg" alt="Tinturas Hair Fashion Colors" />
                                <div>  
                                    <p className="design__title">Tinturas Originales HFC
                                        <br />
                                        <br />
                                        $7.000
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="design__item"> 
                            <a href="">
                                <img className="design__img" src="../../public/img/productos/3.jpg" alt="Tinturas Pravana" />
                                <div>
                                    <p className="design__title">Tinturas Pravana
                                    <br />
                                    <br />
                                        $12.000
                                    </p>
                                </div>
                            </a>
                        </div> 
                        <div className="design__item">
                            <a href="">
                            <img className="design__img" src="../../public/img/productos/7.jpg" alt="Bomba Nutritiva Hair Fashion Colors" />
                            <div>
                                <p className="design__title">Bomba Nutritiva
                                <br />
                                <br />
                                    $10.000
                                </p>
                            </div>
                            </a>
                        </div>
                        <div className="design__item">
                            <a href="">
                                <img className="design__img" src="../../public/img/productos/9.jpg" alt="Olaplex Profesional" />
                                <div>
                                    <p className="design__title">Olaplex N° 3 y 7
                                        <br />
                                        <br />
                                        $29.000
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="design__item">
                            <a href="">
                                <img className="design__img" src="../../public/img/productos/10.jpg" alt="Shampoo Matizador" />
                                <div>
                                    <p className="design__title">Shampoo Matizador
                                        <br />
                                        <br />
                                        $6.000
                                    </p>
                                </div>
                            </a>
                        </div> 
                        <div className="design__item"> 
                            <a href="">
                                <img className="design__img" src="../../public/img/productos/11.jpg" alt="Alisado Definitivo" />
                                <div>
                                    <p className="design__title">Alisado Definitivo
                                        <br />
                                        <br />
                                        $10.000
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="design__item">
                            <a href="">
                                <img className="design__img" src="../../public/img/productos/12.jpg" alt="Crema Botox Capilar" />
                                <div>
                                    <p className="design__title">Crema Botox Capilar
                                        <br />
                                        <br />
                                        $5.000
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="design__item">
                            <a href="">
                                <img className="design__img" src="img/productos/13.jpg" alt="Crema Ox/Decolorante" />
                                <div>
                                    <p className="design__title">Crema Ox+Decolorante
                                        <br />
                                        <br />
                                        $4.000
                                    </p>
                                </div>
                            </a>
                        </div> 
                    </div>        
                </main>
            <Footer />
        </>
    )
}

export default Products;