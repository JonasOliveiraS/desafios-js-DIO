/* O cálculo é feito da seguinte forma: divide-se o peso (em kg) pelo quadrado da altura (em metros). Utilize a nossa calculadora. Faça o teste. */

/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC = divide-se o peso (em kg) pelo quadrado da altura (em metros)
Instancie uma pessoa chamada -José que tenha 70KG, de peso e 1,75 de altura e peça ao -José para dizer o valor do seu IMC */

class Pessoa {
    constructor(nome,peso, altura){
        this.nome = nome;        
        this.peso = peso;
        this.altura = altura;        
    }

    calcularIMC(){
        this.IMC =  this.peso / (this.altura **2 );
        console.log(`Olá, meu nome é ${this.nome} e o meu IMC é de ${this.IMC.toFixed(2)}` )
    }
    classificarImc(){
        if (this.IMC < 18.5) {
            this.condicao = "abaixo do peso";
        } else if (this.IMC  > 40) {
            this.condicao = "obesidade grave";
        } else if (this.IMC  > 18.5 && this.IMC  < 25) {
            this.condicao = "peso normal";
        } else if (this.IMC  > 25 && this.IMC  < 30) {
            this.condicao = "acima do peso";
        } else {
            this.condicao = "obeso";
        }
        console.log(`A condição do ${this.nome} é de ${this.condicao}`)
    }
}

jose = new Pessoa("Jose", 70 , 1.75);

jose.calcularIMC()
jose.classificarImc()