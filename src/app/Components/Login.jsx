import React from "react";

const Login = () => {
    return(
        <main className="main">
            <section className="info">
                <h3 className="design__title">Ingresa a tu cuenta</h3>
            </section>
            <section className="container-testimonials">
                <form action="login.php" method="post">
                    <div className="testimonials__txt">
                        <label for="nombre">Nombre de usuario:</label>
                        <input type="text" pattern="[a-zA-Z0-9]+" id="nombre" name="nombre" placeholder="luisperez123" className="input" required />
                        <br />
                    </div>
                    <div className="testimonials__txt">
                        <label for="contrasenia">Contraseña:</label>
                        <input type="password" id="contrasenia" name="contrasenia" className="input" required />
                        <br />
                    </div>
                    <div className="testimonials__txt">
                        <input type="submit" value="Ingresa" name="btn_loguear" />
                    </div>  
                </form>
                <h3 className="section__title">Si no tienes cuenta Regístrate aquí, ¡Es gratis!</h3>
                <a href="registro" className="welcome__btn">Registrarme</a>
                <a href="deslogueo" className="welcome__btn">Cerrar Sesión</a>
            </section>
        </main>
    )
}

export default Login;