/* qual a média do aluno? */
let notas = [];

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)
notas.push(8)

let mediaNotas = 0;

for (let i = 0; i < notas.length; i++) {
  mediaNotas = mediaNotas + notas[i]
}

let totalNotas = mediaNotas / notas.length

console.log(totalNotas)