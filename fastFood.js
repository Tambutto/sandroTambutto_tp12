// --- MICRO DESAFIO 2 ---

// CREO LA FUNCION PRINCIPAL

function totalApagar(tipohamburgursa, jamon, queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla){
    let subtotal; 
    switch (tipohamburgursa) {
        case "carne":
            subtotal = 1800;
            break;
            
        case "pollo":
            subtotal = 1500;
            break;

        case "vegetariana":
            subtotal = 1200; 
            break;

        default:
            console.log("Elija otra opcion")
             return 0;
    }

    let adicional = 0;
    if (jamon) {
        adicional += 30;
    }else if (queso) {
        adicional += 25;
    } else if (salsaTomate){
        adicional += 5;
    } else if (mayonesa){
        adicional += 5;
    } else if (mostaza){
        adicional += 5;
    } else if (tomate) {
        adicional += 15;
    } else if (lechuga){
        adicional += 10;
    } else if (cebolla){
        adicional += 10;
    } else {
        adicional += 0;
    }
    
    let total = subtotal + adicional;
  
    return total;


}

// CREO LA SEGUNDA FUNCION 

function fastFood (nombre, apellido,tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla){

    const facturado = totalApagar(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla)

    return `Estimado ${nombre} ${apellido}, el monto a pagar es de $${facturado}`;
    
}

    
// let mensaje = fastFood("Sandro", "tambutto", "carne", true, false, false, true, true, false, true, false);
let mensaje = fastFood("Sandro", "tambutto", "pollo", false, false, false, false, false, true, true, true);
// let mensaje = fastFood("Sandro", "tambutto", "vegetariana", true, false, false, true, true, false, true, false);
// let mensaje = fastFood("Sandro", "tambutto", "carne", true, false, false, true, true, false, true, false);
// let mensaje = fastFood("Sandro", "tambutto", "carne", true, false, false, true, true, false, true, false);
// let mensaje = fastFood("Sandro", "tambutto", "carne", true, false, false, false, false, false, false, false);
console.log(mensaje);
