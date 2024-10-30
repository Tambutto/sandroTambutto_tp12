// --- MICRO DESAFIO 1 ---

let sillitabb = 1200;


function alquilerDeVehiculo(tipo,dias,sillabb){
    let costoDiario

    switch (tipo) {
        case "compacto":
                costoDiario = 14000;
            break;
        case "mediano":
            costoDiario = 17000;
            break;
        case "camioneta":
            costoDiario = 28000;
            break;      
    
        default:
            console.log("tipo de vehiculo invalido");
            return;
            
           
        }
        let costoTotal = (costoDiario * dias) + sillabb;
        

     let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipo} alquilado, considerando los ${dias} días utilizados, el monto total a pagar es de $${costoTotal} incluyendo el adicional de silla de bb $${sillabb}`;
     console.log(mensaje);
    }
    
    let totalApagar = alquilerDeVehiculo("camioneta",4,sillitabb);
    



// function alquilerDeVehiculo (tipo, dias, sillabb){
//     let resultado = (tipo * dias) + sillabb;
//     return resultado;

// }


// console.log(`Estimado cliente: en base al tipo de vehículo ${tipo} alquilado, considerando los 5 días utilizados incluyendo las ${sillitabb}, el monto total a pagar es de $${costoTotal}`);
