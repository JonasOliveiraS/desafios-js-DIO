/* Faça uma função que escreva seu nome */

// function revelarNome(nome){
//     console.log(`O meu nome é: ${nome}`);
// }

// revelarNome("Jonas");

/*  Faça uma função que veja se vc é maior de idade */

/* function verificarMaiorIdade(idade)  {
    if(idade < 18){
        return "menor de idade"
    } else {
        return "maior de idade"
    }
}

console.log(verificarMaiorIdade(18))
*/ 


// function verificarMaiorIdade(idade)  {
//     if(idade < 18){
//         console.log("menor de idade")
//     } else {
//         console.log("maior de idade")
//     }
// }

// verificarMaiorIdade(18)

// let valorProduto = 352;

// avistaDebito = 1;
// avistaDinheroPix = 2;
// parceladoDuasVezes = 3;
// parceladoMaisDeDuasVezes = 4;

// condicaoPagamento = 4;



function valorProdutoFinal(valorProduto, condicaoPagamento){
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
}

valorProdutoFinal(1000,4)

