import React from "react";

const Footer = () => {
    return (
        <footer class="main-footer">
            <div class="container">
                <div class="column column--50-25">
                    <h2 class="footer__title">Nosotros</h2>
                    <p class="footer__txt">Somos una tienda especializada en tinturas veganas color fantasía, y productos de estética capilar. También somos un Salón de Belleza especializado en coloración y cuidado capilar.</p>
                </div>
                <div class="column column--50-25">
                    <h2 class="footer__title">Tiendas</h2>
                    <p class="footer__txt">Santiago: Av. Providencia 2216, Local 36A - Horario: L-V 11 a 18:30 hrs.</p>
                    <p class="footer__txt">La Serena: Prat 560 - Horario: L-V 10:30 a 18 hrs.</p>
                    <p class="footer__txt">Rancagua: Germán Riesco 317- Horario: L-V 9 a 20 hrs.</p>
                    <p class="footer__txt">Concepción:  Freire 522 - Horario: L-V 11 a 19 hrs.</p>
                </div>
                <div class="column column--50-25">
                <h2 class="footer__title">Nuestras redes</h2>
                <div class="footer__socials">
                    <br />
                    <div class="social-icon">
                        <i class="fab fa-facebook-f"></i>
                        <a class="social__link" href="https://www.facebook.com/Hairfashioncolors/" target="_blank">Facebook</a>
                    </div>         
                    <div class="social-icon">
                        <i class="fab fa-dribbble fa-instagram"></i>
                        <a class="social__link" href="https://www.instagram.com/hairfashioncolors/" target="_blank">Instagram</a>
                    </div>
                    <div class="social-icon">
                        <i class="fab fa-whatsapp"></i>
                        <a class="social__link" href="https://wa.link/vstqqk" target="_blank">WhatsApp</a>
                    </div>
                </div>
                </div>
                <div class="column column--50-25">
                    <h2 class="footer__title">Contacto</h2>
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                        <p class="contact__txt">Av. Providencia 2216, Local 36A Santiago, Chile</p>
                    </div>
                    <div class="contact-icon">
                        <i class="fas fa-phone-alt"></i>
                        <p class="contact__txt">9 7932 6470</p>
                    </div>
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                        <p class="contact__txt">hairfashioncolors@gmail.com</p>
                    </div>
                    <br />
                    <div class="contact-icon">
                        <i class="fas fa-user"></i>
                        <a href="login.php" class="contact__txt">Ingresa | Regístrate</a> 
                    </div>
                    <br/>
                    <br/>
                    <div class="contact-icon">
                        <i class="fas fa-door-closed"></i>
                        <a href="DB/login/desloguear.php" class="contact__txt">Cerrar Sesión</a> 
                    </div>
                </div>
            </div>
                <p class="copy">© 2022 Hair Fashion Colors. Todos los derechos reservados | <span class="color-span">HairFashionColors</span></p>
        </footer>
    )
}

export default Footer;