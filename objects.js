const botines = [
    {
        marca: 'Adidas',
        modelo:'Predator',
        precio:30000
    },
    {
        marca: 'Nike',
        modelo:'Mercurial',
        precio:35000
    },
    {
        marca: 'Puma',
        modelo:'Future',
        precio:25000
    },
    {
        marca: 'New Balance',
        modelo:'Tekela',
        precio:20000
     },

]

const botinesDisponibles = [
    '1. Adidas Predator\n',
    '2. Nike Mercurial\n',
    '3. Puma Future\n',
    '4. New Balance Tekela\n',
    '5. No quiero comprar'];
    
    let botinElegido = 0
    let listado = ""; 
    botinesDisponibles.forEach((opcion)=>{
        listado+=opcion;
    }
   );

   while(botinElegido!==5)
   {
    botinElegido = parseInt(prompt("Seleccione una opción:\n"+listado));
      
       switch(botinElegido){
           
           case 1: 
           {
              adidas();
              break;
           }
           case 2: 
           {
              nike();
              break;
           }
           case 3: 
           {
              puma();
              break;
           }
           case 4: 
           {
              newBalance();
              break;
           }
           default:
           {
              alert("OPCION INVÁLIDA");
              break;
           }
           
       } 
   }

   function adidas(){

    const botinBuscado = botines.filter((botin)=>botin.marca.includes('Adidas'));

    
  if(typeof botinBuscado!=='undefined')
      {
        console.log('el botin buscado es: ' + JSON.stringify(botinBuscado))
      }
    else{
        alert("el botin no existe");
    }
   }
   function nike(){

    const botinBuscado = botines.filter((botin)=>botin.marca.includes('Nike'));
    
  if(typeof botinBuscado!=='undefined')
      {
        console.log('el botin buscado es: ' + JSON.stringify(botinBuscado))
          
      }
    else{
        alert("el botin no existe");
    }
   }
   function puma(){

    const botinBuscado = botines.filter((botin)=>botin.marca.includes('Puma'));
    
  if(typeof botinBuscado!=='undefined')
      {
        console.log('el botin buscado es: ' + JSON.stringify(botinBuscado))
          
      }
    else{
        alert("el botin no existe");
    }
   }
   function newBalance(){

    const botinBuscado = botines.filter((botin)=>botin.marca.includes('New Balance'));
    
  if(typeof botinBuscado!=='undefined')
      {
        alert('La marca y modelo del botin es : '+JSON.stringify(botinBuscado))
          
      }
    else{
        alert("el botin no existe");
    }
   }
   let producto = botines[0]
   let container = document.createElement('div')
    container.innerHTML = 
        `<h3> Marca: ${producto.marca}</h3>
        <p>Modelo: ${producto.modelo}</p>
        <p>Precio: ${producto.precio}</p>`;
        
    document.body.appendChild(container);