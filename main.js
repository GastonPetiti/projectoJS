//pidiendole al usuario que ingrese sus datos
let usuario = prompt('ingrese su nombre y apellido');
alert(`Bienvenido ${usuario}`)

//pidiendo al usuario el precio del producto que va a comprar y en cuantas cuotas lo va a pagar
const precioBotin = parseInt(prompt('ingrese el precio del botin que eligió') );
let cuotas = parseInt(prompt('En cuantas cuotas lo quiere pagar?'));

//avisandole al usuario cuanto seria lo que tendria q gastar dependiendo la cantidad de cuotas que eligió
function calculoCuotas(precioBotin, cuotas){
    let division = precioBotin / cuotas;
    alert (`pagando en ${cuotas} cuotas el total seria ${division}`)
}
calculoCuotas(precioBotin, cuotas);
