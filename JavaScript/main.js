//2da preentrega de JS LUTHER RODRIGUEZ
/*Consigna: Todo lo de la primera entrega mas -ARRAYS DE OBJETOS, -DOM, -EVENTOS,-FUNCIONES DE ORDEN SUPERIOR (minimo 2)
-USO DE STORAGE. no usar prompt, alert, warn de la consola, en vez se usa el DOM*/
const gastos = [
    {
        id: 1,
        descripcion: "alimentos",
        costo: 300000
    },{
        id: 2,
        descripcion: "recreacion",
        costo: 150000

    },{
        id: 3,
        descripcion: "creditos",
        costo: 300000
    }, {
        id: 4,
        descripcion: "vivienda",
        costo: 400000
    },{
        id: 5,
        descripcion: "servicios",
        costo: 150000
    },{
        id: 6,
        descripcion: "otros",
        costo: 150000
    }
]

let carritoTotalgastos = []

let gastosContenedor = document.getElementById("descripcion-gastos")
function crearGastos (gastoLista) {
    gastoLista.forEach(gasto => {
        const tarjeta = document.createElement("div")
        tarjeta.innerHTML= `<h3>${gasto.descripcion}</h3>
                            <p>${gasto.costo}</p>
                            <button class="gastoSumar" id="${gasto.id}">Sumar</button>`
        gastosContenedor.appendChild(tarjeta)
    })

    agregarGastosCarrito()
}
crearGastos(gastos)

function agregarGastosCarrito () {
    agregadoCarrito = document.querySelectorAll(".gastoSumar")//Lista de nodo que captura cada objeto del array q fuera seleccionado
    agregadoCarrito.forEach(button=> { //recorro la lista de nodo
        button.onclick = (e) => { //Evento click en el botón
            const gastosId = e.currentTarget.id // Guardo el evento
            const seleccionGasto = gastos.find(gasto => gasto.id == gastosId) // compara los id y asigna a la nueva lista
            
            carritoTotalgastos.push(seleccionGasto)//Lleva toda la seleccióin de gastos al carrito
            console.log(carritoTotalgastos)// veo q anda bien en la consola

            localStorage.setItem("GASTOS", JSON.stringify(carritoTotalgastos))
        }
    })
}