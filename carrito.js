let seleccionGastos = localStorage.getItem("GASTOS")
seleccionGastos = JSON.parse(seleccionGastos)

let contenidoCarrito = document.getElementById("seccion_carrito")

function crearCarrito(carritoSeleccion) {
    carritoSeleccion.forEach(gasto => {
        const tarjeta = document.createElement("div")
        tarjeta.innerHTML= `<h3>${gasto.descripcion}</h3>
                            <p>${gasto.costo}</p>`
        contenidoCarrito.appendChild(tarjeta) 
    });
}
crearCarrito(seleccionGastos)