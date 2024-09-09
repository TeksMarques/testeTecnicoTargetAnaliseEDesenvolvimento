// No desafio 3, dado o codigo descrito se trata de um loop,
// onde ele vai ser inicialiado no 1 e somado mais 1 em cada volta
// realizada ate chegar no numero 12, onde vai ser finalizado as interações
// e vai ser mostrado o valor final da soma que será de 77

// a linguagem utilizada no codigo do desagio esta em Portugol,
// mas abaixo vai estar escrito em javascript e o 
// valor da soma vai estar em um console log


let indice = 12;
let soma = 0;
let K = 1;

while (K < indice) {
    K += 1;
    soma += K;
}

console.log(`O valor final da soma é de ${soma}.`);