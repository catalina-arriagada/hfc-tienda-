import React from "react";
import Deslog from "./Deslog";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="column column--50-25">
                    <h2 className="footer__title">Nosotros</h2>
                    <p className="footer__txt">Somos una tienda especializada en tinturas veganas color fantasía, y productos de estética capilar. También somos un Salón de Belleza especializado en coloración y cuidado capilar.</p>
                </div>
                <div className="column column--50-25">
                    <h2 className="footer__title">Tiendas</h2>
                    <p className="footer__txt">Santiago: Av. Providencia 2216, Local 36A - Horario: L-V 11 a 18:30 hrs.</p>
                    <p className="footer__txt">La Serena: Prat 560 - Horario: L-V 10:30 a 18 hrs.</p>
                    <p className="footer__txt">Rancagua: Germán Riesco 317- Horario: L-V 9 a 20 hrs.</p>
                    <p className="footer__txt">Concepción:  Freire 522 - Horario: L-V 11 a 19 hrs.</p>
                </div>
                <div className="column column--50-25">
                <h2 className="footer__title">Nuestras redes</h2>
                <div className="footer__socials">
                    <br />
                    <div className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                        <a className="social__link" href="https://www.facebook.com/Hairfashioncolors/" target="_blank">Facebook</a>
                    </div>         
                    <div className="social-icon">
                        <i className="fab fa-dribbble fa-instagram"></i>
                        <a className="social__link" href="https://www.instagram.com/hairfashioncolors/" target="_blank">Instagram</a>
                    </div>
                    <div className="social-icon">
                        <i className="fab fa-whatsapp"></i>
                        <a className="social__link" href="https://wa.link/vstqqk" target="_blank">WhatsApp</a>
                    </div>
                </div>
                </div>
                <div className="column column--50-25">
                    <h2 className="footer__title">Contacto</h2>
                    <div className="contact-icon">
                        <i className="fas fa-map-marker-alt"></i>
                        <p className="contact__txt">Av. Providencia 2216, Local 36A Santiago, Chile</p>
                    </div>
                    <div className="contact-icon">
                        <i className="fas fa-phone-alt"></i>
                        <p className="contact__txt">9 7932 6470</p>
                    </div>
                    <div className="contact-icon">
                        <i className="fas fa-envelope"></i>
                        <p className="contact__txt">hairfashioncolors@gmail.com</p>
                    </div>
                    <br />
                    <div className="contact-icon">
                        <i className="fas fa-user"></i>
                        <a href="/login" className="contact__txt">Ingresa | Regístrate</a> 
                    </div>
                    <br/>
                    <br/>
                    <div className="contact-icon">
                        <i className="fas fa-door-closed"></i>
                        <a href="/deslogueo" className="contact__txt">Cerrar Sesión</a> 
                    </div>
                </div>
            </div>
                <p className="copy">© 2022 Hair Fashion Colors. Todos los derechos reservados | <span className="color-span">HairFashionColors</span></p>
        </footer>
    )
}

export default Footer;