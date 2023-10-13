/*  Crie um programa que seja capaz de percorrer uma lista números e imprima cada numero Par encontrado */ 

let lisNumber = [10, 12, 7, 5, 6, 235, 8, 718, 9, 568, 1010124187, 1, 56435465, 4546546];

for(i = 0; i < lisNumber.length; i++){
    if(lisNumber[i] % 2 == 0){
        console.log(`O número ${lisNumber[i]} é par! `);
    }
}

