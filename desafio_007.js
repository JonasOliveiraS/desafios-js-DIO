/* Crie uma classe para representar carros
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado,
Crie um metodo que dado a quantidade de quilômetros e o preço dc cabustível nos dê o valor
em reais para realizar este percurso. */

class Carro{
    constructor(marca, cor, mediaKm){
        this.marca = marca;
        this.cor = cor;
        this.mediaKm = mediaKm;
    }
    calculadorViagem(kmViagem, precoGasolina){
        this.valorViagem = kmViagem / this.mediaKm * precoGasolina
        console.log (`O valor da viagem custará R$: ${this.valorViagem}!`)
    }
}

carro001 = new Carro("chevrolet", "prata", 12);

carro001.calculadorViagem(200,6)