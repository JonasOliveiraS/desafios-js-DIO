
// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 01 - Preço do etanol;
// 02 - Preço do gasolina;
// 03 - O tipo de combustível que está no seu carro;
// 04 - Gasto médio de combustível do carro por KM;
// 05- Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let precoEtanol = 4;
precoGasolina = 6;
gastoMedioKm = 10;
distanciaViagem = 100;

tipoCombustivel = "etanol"

if (tipoCombustivel == "gasolina") {
    let valorViagem = distanciaViagem / gastoMedioKm * precoGasolina;
    console.log("O valor da viagem é: " + valorViagem.toFixed(2))
} else if (tipoCombustivel == "etanol") {
    let valorViagem = distanciaViagem / gastoMedioKm * precoEtanol;
    console.log("O valor da viagem é: " + valorViagem.toFixed(2))
}