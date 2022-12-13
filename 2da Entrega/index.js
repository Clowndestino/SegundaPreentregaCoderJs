

//array de Objetos

 let mangas = [
     {id: "Bleach", valor: 750, paginas:420 , oferta:true},
     {id: "Demon Slayer", valor: 750, paginas:420, oferta:true},
     {id: "Evangelion", valor: 750, paginas:420,oferta:false},
     {id: "Gantz", valor: 1350, paginas:600, oferta:true},
     {id: "My Hero Academia", valor: 750, paginas:420,oferta:false},
     {id: "Naruto", valor: 750, paginas:420,oferta:false},
     {id: "Promise Neverland", valor: 750, paginas:420,oferta:false},
     {id: "Akame Ga Kill", valor: 950, paginas:520,oferta:false},
     {id: "Attack on Titan", valor: 1350, paginas:600, oferta:true},
     {id: "Dragon Ball Super", valor: 1350, paginas:600,oferta:false},
     {id: "Haiikyu", valor: 750, paginas:420,oferta:false},
     {id: "Tokyo Revengers", valor: 1350, paginas:600,oferta:false},   
 ];


 console.log(mangas);


 // Metodo Filter

 let descuento = mangas.filter(o => o.oferta === true)

 console.log(descuento);

 // Metodo Sort

mangas.sort((a,b) =>{
    if(a.id < b.id){
        return -1;
    }

    if(a.id > b.id){
        return 1;
    }
    return 0;
} );

console.log(mangas);

// 4) Confirm

let verOfertas = confirm("Desea Ver Ofertas?");
if( verOfertas === true){
    console.log(descuento);
}

// 5) Find
let buscarProducto = prompt("Que producto desea buscar?")
    
buscarProducto = mangas.find( a => a.id);
alert (buscarProducto)


