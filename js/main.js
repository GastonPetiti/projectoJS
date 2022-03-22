const carrito = document.querySelector('.carrito1')

//buscando los botones  ed cada card
let boton = document.querySelectorAll('.btn-carrito')
boton.forEach((obj) =>{
    obj.addEventListener('click', sumarBotinClickeado)
})

function sumarBotinClickeado (event) {
    const button = event.target;
    const item = button.closest('.card_product')

    const botinTitulo = item.querySelector('.infoBotin').textContent;
    const botinPrecio = item.querySelector('.precioBotin').textContent

    mostrarCarrito(botinTitulo,botinPrecio)
}
//creando y mostrando el carrito en el HTML
function mostrarCarrito (botinTitulo, botinPrecio) {
    const viendoCarrito = document.createElement('div')
    viendoCarrito.innerHTML = `<div class = 'carritoCompra'>
                                <h3 class = 'infoBotincarrito'>${botinTitulo}</h3>
                                <p class='precioBotinCarrtio'>${botinPrecio}</p>
                                <input type="number" value="1">
                                <button class='botonBorrar'>Borrar</button>
                                <div class='confirmarCompra'>
                                <p class='totalCompra'>Total:${botinPrecio}</p>
                                <button class='botonComprar'> Comprar</button>
                            </div>
                                </div>`
carrito.appendChild(viendoCarrito)

//buscando el boton para eliminar el producto del carrito y dandole la funcionalidad para que lo elimine
viendoCarrito.querySelector('.botonBorrar').addEventListener('click',borrarProducto)

viendoCarrito.querySelector('.botonComprar').addEventListener('click',compraConfirmada)

let botinComprado = localStorage.setItem('modelo',botinTitulo)

let precioBotinComprado =localStorage.setItem('precio', botinPrecio)


}
function borrarProducto (event) {
    const botonEliminar = event.target
    botonEliminar.closest('.carritoCompra').remove()
}
function compraConfirmada (event) {
    const botonCompra =event.target
    let alerta = botonCompra.closest('.carritoCompra')
    console.log('Compra exitosa')
}





/*function acutalizarPrecio (){
    acutalizarPrecio()
    let total = 0;
    const totalCompra = document.querySelectorAll('.totalCompra')
    totalCompra.forEach((obj) =>{
        botin = obj;
       // console.log(botin)
    })
    //console.log(totalCompra)

    const carritoCompra = document.querySelectorAll('.infoBotincarrito')
    //console.log(carritoCompra)

    let prueba2 = document.querySelector('.precioBotinCarrtio')
    console.log(prueba2)

    carritoCompra.forEach (carritoCompra =>{
        const precioProductoSeleccionado = carritoCompra.querySelector('.precioBotinCarrtio')
        console.log('a ver',precioProductoSeleccionado)
    })
    console.log(total)
}*/