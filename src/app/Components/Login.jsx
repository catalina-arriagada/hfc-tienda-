import React from "react";

const Login = () => {
    return(
        <main class="main">
            <section class="info">
                <h3 class="design__title">Ingresa a tu cuenta</h3>
            </section>
            <section class="container-testimonials">
                <form action="login.php" method="post">
                    <div class="testimonials__txt">
                        <label for="nombre">Nombre de usuario:</label>
                        <input type="text" pattern="[a-zA-Z0-9]+" id="nombre" name="nombre" placeholder="luisperez123" class="input" required />
                        <br />
                    </div>
                    <div class="testimonials__txt">
                        <label for="contrasenia">Contraseña:</label>
                        <input type="password" id="contrasenia" name="contrasenia" class="input" required />
                        <br />
                    </div>
                    <div class="testimonials__txt">
                        <input type="submit" value="Ingresa" name="btn_loguear" />
                    </div>  
                </form>
                <h3 class="section__title">Si no tienes cuenta Regístrate aquí, ¡Es gratis!</h3>
                <a href="registro.php" class="welcome__btn">Registrarme</a>
                <a href="DB/login/desloguear.php" class="welcome__btn">Cerrar Sesión</a>
            </section>
        </main>
    )
}

export default Login;