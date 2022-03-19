/*
let persona = localStorage.getItem('usuario');
let mostrarPersona = document.createElement('p')
    mostrarPersona.innerHTML = `<p>${persona}</p>`

document.body.appendChild(mostrarPersona);*/
//obtengo la marca y modelo 


/*let tipoBotin = document.querySelectorAll('.infoBotin')
tipoBotin.forEach((botin)=>{
    tipoBotin = botin.textContent;
})


//obtengo el precio
let valorBotin = document.querySelectorAll('.precioBotin')
valorBotin.forEach((precio) =>{
    valorBotin=precio.textContent;
})*/

const carrito = document.querySelector('.carrito1')

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
function mostrarCarrito (botinTitulo, botinPrecio) {
    const viendoCarrito = document.createElement('div')
    viendoCarrito.innerHTML = `<div class = 'carritoCompra'>
                                <h3 class = 'infoBotincarrito'>${botinTitulo}</h3>
                                <p class='precioBotinCarrtio'>${botinPrecio}</p>
                                </div>`
carrito.appendChild(viendoCarrito)
}