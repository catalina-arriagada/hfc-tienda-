import React from "react";
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <header className="main-header">
                <div className="container container--flex">
                <h1 className="main-title"><span className="color-span">HAIR FASHION</span> COLORS</h1>
                    <nav className="main-nav">
                    <span className="icon-menu" id="btn-menu"><i className="fas fa-bars"></i></span>
                    <ul className="menu" id="menu">
                        <li className="menu__item"><Link href="/" className="menu__link menu__link--select"><span>Inicio</span></Link></li>
                        <li className="menu__item"><Link href="/productos" className="menu__link"><span>Productos</span></Link></li>
                        <li className="menu__item"><Link href="/servicios" className="menu__link"><span>Servicios</span></Link></li>
                        <li className="menu__item"><Link href="/preguntasfrecuentes" className="menu__link"><span>Preguntas frecuentes</span></Link></li>
                        <div className="nav-social">
                        <Link href="https://www.facebook.com/Hairfashioncolors/" className="nav-social__item" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                        <Link href="https://wa.link/vstqqk" className="nav-social__item" target="_blank"><i className="fab fa-whatsapp"></i></Link>
                        <Link href="https://www.instagram.com/hairfashioncolors/" className="nav-social__item" target="_blank"><i className="fab fa-instagram"></i></Link>
                        <Link href="/login" className="nav-social__item"><i className="fa-solid fa-user"></i></Link>            
                        </div>
                        <hr />
                    </ul>
                    </nav>
                    </div>
            </header>
            <div className="banner">
                <div className="banner__content">
                    <div className="container">
                    <h2 className="banner__title">Tinturas, Cuidado Capitar, Salón de Belleza</h2>
                    <p className="banner__txt">PRODUCTOS DE BELLEZA PARA TU CABELLO Y SALÓN DE BELLEZA</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;