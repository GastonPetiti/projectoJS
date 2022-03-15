class Botines{
    constructor(marca,modelo,precio){
        this.marca = marca;
        this.mmodelo = modelo;
        this.precio = parseInt(precio);
    }
}
 let = listaBotines = [];

listaBotines.push(new Botines ('Adidas', 'Predator', 40000));
listaBotines.push(new Botines ('Nike', 'Mercurial', 42000));
listaBotines.push(new Botines ('Puma', 'Future', 30000));
listaBotines.push(new Botines ('New Balance', 'Tekela', 22000));
listaBotines.push(new Botines ('Adidas', 'X', 38000));
listaBotines.push(new Botines('Adidas','Copa', 33000));
listaBotines.push(new Botines('Nike','Tiempo',30000));
listaBotines.push(new Botines('Nike', 'Phantom', 35000));
listaBotines.push(new Botines('Puma','Ultra',32000));
listaBotines.push(new Botines('New Balance','Furon',25000));
listaBotines.push(new Botines('Puma','King',20000));


//obtengo la marca y modelo 
let tipoBotin = document.getElementsByClassName('infoBotin')

//obtengo el precio
let valorBotin = document.getElementsByClassName('precioBotin')

//mostrando por consola
const boton = document.addEventListener('click', enviarProducto)
function enviarProducto (){
    console.log(`el precio de ${tipoBotin.innerHtml} es de ${valorBotin.value} pesos`)
}