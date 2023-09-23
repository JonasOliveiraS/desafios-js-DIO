// 1) Faca um algor Algoritimo que dado as 3 nctas tiradas por um aluno em um semestre da faculdade calcule e imprima a
// sua média e a sua classificação conforme a tabela abaixa.

//  Media = ( nota 1 + nota 2 + nota 3) /3;

// Classificação:

// Media menor que 5, reprovação
// Média entre 5 e 7, recuperação
// Média acima de 7, passou de semestre;


let nota01 = 6;
nota02 = 6;
nota03 = 6;

media = (nota01 + nota02 + nota03) / 3;

if (media < 5) {
    console.log("Com a sua média de " + media.toFixed(2) + " você está reprovado.")
} else if (media > 7) {
    console.log("Com a sua média de " + media.toFixed(2) + " você está passou de semestre!")
} else {
    console.log("Com a sua média de " + media.toFixed(2) + " você está de recuperação." )
}