import React from "react";

const Carrito = () => {
    return(
        <>
            <table className="container-testimonials">
                <thead>
                    <tr>
                        <th className='testimonials__txt' style={{border: 'pink 5px outset'}}>Nombre</th>
                        <th className='testimonials__txt' style={{border: 'pink 5px outset'}}>Precio</th>
                        <th className='testimonials__txt' style={{border: 'pink 5px outset'}}>Cantidad</th>
                        <th className='testimonials__txt' style={{border: 'pink 5px outset'}}>Total</th>
                    </tr>
                </thead>
                    <tr class= 'container-testimonials'>
                        <th className='testimonials__txt' style={{border: 'pink 5px outset'}}>nombre</th>
                        <th className='testimonials__txt' style={{border: 'pink 5px outset'}}>precio</th>
                        <th className='testimonials__txt' style={{border: 'pink 5px outset'}}>cantidad</th>
                        <th className='testimonials__txt' style={{border: 'pink 5px outset'}}>total</th>
                    </tr>
            </table>
        <div id="smart-button-container">
            <div style={{textAlign : "center"}}>
                <div id="paypal-button-container"></div>
            </div>
        </div>

        </>
        
    )
}

export default Carrito;