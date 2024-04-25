function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function obtenerMensajeIMC(imc) {
    if (imc < 16) {
        return "Tienes delgadez severa.";
    } else if (imc >= 16 && imc < 17) {
        return "Tienes delgadez moderada.";
    } else if (imc >= 17 && imc < 18.5) {
        return "Tienes delgadez leve.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Tienes un peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Tienes sobrepeso.";
    } else if (imc >= 30 && imc < 35) {
        return "Tienes obesidad leve.";
    } else if (imc >= 35 && imc < 40) {
        return "Tienes obesidad moderada.";
    } else {
        return "Tienes obesidad mórbida.";
    }
}
let peso = parseFloat(prompt("Por favor, ingresa tu peso en kilogramos:"));
let altura = parseFloat(prompt("Ahora, ingresa tu altura en metros:"));

let imc = calcularIMC(peso, altura);

let mensajeIMC = obtenerMensajeIMC(imc);

console.log("Tu IMC es " + imc.toFixed(2) + ". " + mensajeIMC);



