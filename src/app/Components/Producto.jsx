import React from "react";

const Producto = () => {
    return(
        <main class="main">
            <h3 class="producto_titulo"></h3>
            <div class="producto">
                <img class="producto_imagen" src="" alt="Imagen del Producto" />
                <div class="producto_contenido">
                    <p>Descripción</p>
                    <form method="POST" class="formulario" action="carritos"> 
                        <div class="form-c">
                            <select class="formulario__campo" name="colorId" >
                            <option disabled selected>-- Selecciona Color --</option>
                            </select>
                        </div>
                        <div class="form-c">
                            <select class="formulario__campo" name= "tamanoId">
                                <option disabled selected>-- Selecciona Tamano --</option>
                            </select>
                        </div>
                        <div class="form-c">        
                            <input class="formulario__campo" value="Cantidad:" readonly onmousedown="return false"></input>
                        </div>
                        <div class="form-c">
                            <input class="formulario__campo" type="number" placeholder="Cantidad" min="1" max="99" value="1" name="cantidad"></input>
                        </div>
                        <div>
                            <input class="formulario__submit" type="submit" value="agregar"/>
                            <br />
                            <a class="formulario__submit" href="carritos.php" style={{backgroundColor:"silver"}}>Mi carrito</a>
                            <br />
                        </div>  
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Producto;