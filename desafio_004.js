/*  O IMC - Indice de Massa Corportal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC: 
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo: 

IMC em adultos, condição: 
- Abaixo de 18.5 - Abaixo do peso;
- Entre 18.5 e 25 - Peso normal; 
- Entre 25 e 30 - Acima do peso;
- Entre 30 e 40 - Obeso;
- Acima de 40 - Obesidade Grave;
*/

let peso = 105;
altura = 1.72;
calculoImc = peso / Math.pow(altura,2);

if (calculoImc < 18.5) {
    console.log("O seu IMC é de " + calculoImc.toFixed(2) + " então você é classificado como abaixo do peso.")
} else if (calculoImc > 40) {
    console.log("O seu IMC é de " + calculoImc.toFixed(2) + " então você é classificado como obesidade grave.")
} else if (calculoImc > 18.5 && calculoImc < 25) {
    console.log("O seu IMC é de " + calculoImc.toFixed(2) + " então você é classficado como peso normal.")
} else if (calculoImc > 25 && calculoImc < 30) {
    console.log("O seu IMC é de " + calculoImc.toFixed(2) + " então você é classificado como acima do peso.")
} else {
    console.log("O seu IMC é de " + calculoImc.toFixed(2) + " então você é classificado como obeso.")
}