//creando objetos de los productos que estaran a la venta
class Botines{
    constructor(marca,modelo,precio){
        this.marca = marca;
        this.mmodelo = modelo;
        this.precio = precio;
    }
}

const botinesAdidas = new Botines ('Adidas', 'Predator', 30000)
const botinesNike = new Botines ('Nike', 'Mercurial', 35000)
const botinesPuma = new Botines ('Puma', 'Future', 25000)
const botinesNewBalance = new Botines ('New Balance', 'Tekela', 20000)
// mostrando por consola los productos que estan disponibles
const productos = [botinesAdidas,botinesNewBalance,botinesNike,botinesPuma]
console.log (`nuestros productos disponibles son ${productos}`);
