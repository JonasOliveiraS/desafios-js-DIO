// Faça um programa para calcular o valor de uma viagem.
// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;
// Imprima no console o valor que será gasto de combustível para realizar esta viagem.

let precoCombustivel = 5.7;
    mediaCombustivelCarro = 10;
    percorrido = 100;
    
    valorViagem = (percorrido/mediaCombustivelCarro) * precoCombustivel;

    console.log(valorViagem.toFixed(2))