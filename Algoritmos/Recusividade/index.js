


function fatorial(n) {
    console.log("Calculando fatorial de "+n);
   if (n === 0){
    console.log("Terminou o fatorial de 0 = 1 ");

    return 1
}
const f = n * fatorial(n-1)
console.log("Terminou o fatorial "+ n+" = "+f);

return n * fatorial(n-1)
  }

  /*
*recursividade é uma forma de resolver problemas dividindo-os em problemas menores, 
*usando uma função que chama a si mesma até alcançar uma solução simples (caso base).
Recursividade em algoritmos é uma técnica onde uma função chama a si mesma para resolver um problema.

Pense em um quebra-cabeça: em vez de resolver o quebra-cabeça inteiro de uma vez, você divide ele em partes menores e resolve uma parte de cada vez. A recursividade faz algo parecido: ela divide o problema em problemas menores do mesmo tipo até chegar a uma parte que é fácil de resolver (o caso base).

Depois, ela combina as soluções dos problemas menores para resolver o problema original.

Um exemplo simples é a função de calcular o fatorial de um número. O fatorial de n (escrito como n!) é o produto de todos os números de 1 até n. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1. Usando recursividade, podemos definir isso como:

O fatorial de 1 é 1 (caso base).
O fatorial de n é n * fatorial de (n-1).
Assim, a função chama a si mesma com um número menor até chegar ao caso base.
*/

module.exports = fatorial