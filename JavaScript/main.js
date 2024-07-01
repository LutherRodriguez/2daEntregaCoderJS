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

let gastosContenedor = document.getElementById("descripcion-gastos")
function crearGastos (gastoLista) {
    gastoLista.forEach(gasto => {
        const tarjeta = document.createElement("div")
        tarjeta.innerHTML= `<h3>${gasto.descripcion}</h3>
                            <p>${gasto.costo}</p>
                            <button class="gastoSumar" id="${gasto.id}">Sumar</button>`
        gastosContenedor.appendChild(tarjeta)
    });
}
crearGastos(gastos)