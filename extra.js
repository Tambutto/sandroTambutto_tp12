// --- DESAFIO EXTRA ---

let miModulo = {

    //METODO 1
    
    enMayuscula: function upperConverter(frase){
        let oracion = frase.toUpperCase();
        return oracion;
    },

    // METODO 2
    
    tipoDeDato: function dataType(valor){
        return typeof valor;
    },
    
    // METODO 3
    
    edadPerro: function dogAge(perro){
        let edadPerro = parseInt(perro * 7);
        return edadPerro;
    },

    // METODO 4

    salario: function hourPrice(salarioMensual,cantidadDiasTrabajados,horasTrabajadas){
        valorHoraDiaria = salarioMensual / cantidadDiasTrabajados;
        valorHoraTotal = valorHoraDiaria / horasTrabajadas;
        return valorHoraTotal;
    }  
}

module.exports = miModulo;

// METODO 1

// console.log(upperConverter('hola como estas'));

// METODO 2


// console.log(dataType(33));
// console.log(dataType('hola'));
// console.log(dataType(false));
// console.log(dataType(function(){}));
// console.log(dataType({}));

// METODO 3

// console.log(dogAge(6));

// -- METODO 4 -- 


// console.log(hourPrice(30000,30,8));
