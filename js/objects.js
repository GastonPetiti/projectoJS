class Botines{
    constructor(id,marca,modelo,precio,cantidad,linkImg){
        this.id = parseInt(id);
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseInt(precio);
        this.cantidad = parseInt(cantidad);
        this.linkImg = linkImg
    }
}
 let = listaBotines = [];

listaBotines.push(new Botines (1,'Adidas','Predator', 40000,10,"img/AdidasPredator.jpg"));
listaBotines.push(new Botines (2,'Nike','Mercurial', 42000,15,"img/NikeMercurial.jpg"));
listaBotines.push(new Botines (3,'Puma','Future', 30000,8,"img/PumaFuture.jpg"));
listaBotines.push(new Botines (4,'New Balance','Tekela', 22000, 7,"img/NewBalanceTekela.jpg"));
listaBotines.push(new Botines (1,'Adidas','X', 38000,13,"img/AdidasX.jpg"));
listaBotines.push(new Botines(1,'Adidas','Copa', 33000, 11,"img/AdidasCopa.jpg"));
listaBotines.push(new Botines(2,'Nike','Tiempo',30000,20,"img/NikeTiempo.jpg"));
listaBotines.push(new Botines(2,'Nike','Phantom', 35000,17,"img/NikePhantom.jpg"));
listaBotines.push(new Botines(3,'Puma','Ultra',32000,18,"img/PumaUltra.jpg"));
listaBotines.push(new Botines(4,'New Balance','Furon',25000, 10,"img/NewBalanceFuron.jpg"));
listaBotines.push(new Botines(3,'Puma','King',20000,5,'img/PumaKing.jpg'));

const section = document.querySelector('.section')

for (botin of listaBotines) {
    let crearProducto = document.createElement('div')
    crearProducto.innerHTML =`
    <section>
    <div class="card_product">
    <div class="img_container">
        <img src="${botin.linkImg}" alt="">
    </div>
    <h3 class="infoBotin">${botin.marca} ${botin.modelo}</h3>
    <p class="precioBotin">$${botin.precio}</p>
    <button class="btn-carrito">Agregar al Carrito</button>
</div>
</section>`

section.append(crearProducto)
}

const botonCompra = document.querySelectorAll('.btn-carrito')
botonCompra.forEach((obj)=>{
    obj.addEventListener('click',agregarAlCarrito)
})

function agregarAlCarrito (event){
    const button2 = event.target
    const item = event.target.classList.contains('btn-carrito')

    const botinInfo = item.querySelectorAll('.infoBotin')
    
    const precioBotin = item.querySelectorAll('.precioBotin')
    
    mostrarCompra(botinInfo, precioBotin)
}

function mostrarCompra (botinInfo, precioBotin){
    const modeloBotin = botinInfo.forEach(botin => console.log(botin).textContent)
    const valorBotin = precioBotin.forEach(precio => console.log(precio))
}