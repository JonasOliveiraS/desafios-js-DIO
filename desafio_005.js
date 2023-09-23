/* Elabora um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Ultilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o cáculo adequado. 

Código condição de pagamento: 
- À vista débito, recebe 10% de desconto;
- À vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

let valorProduto = 352;

avistaDebito = 1;
avistaDinheroPix = 2;
parceladoDuasVezes = 3;
parceladoMaisDeDuasVezes = 4;

condicaoPagamento = 4;
if(condicaoPagamento === 1){
    let ValorFinal = valorProduto * 0.90
    console.log("O valor do produto ficou: R$" + ValorFinal + " reais.")
} else if (condicaoPagamento === 2){
    let ValorFinal = valorProduto * 0.85
    console.log("O valor do produto ficou: R$" + ValorFinal + " reais.")
} else if (condicaoPagamento === 3){
    let ValorFinal = valorProduto 
    console.log("O valor do produto ficou: R$" + ValorFinal.toFixed(2) + " reais.")
} else {
    let ValorFinal = valorProduto * 1.1
    console.log("O valor do produto ficou: R$" + ValorFinal.toFixed(2) + " reais.")
}


