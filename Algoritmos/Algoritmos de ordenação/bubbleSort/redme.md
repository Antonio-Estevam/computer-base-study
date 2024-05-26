## Descrição do Desafio

Seu objetivo é implementar o algoritmo de ordenação Bubble Sort em Node.js. O Bubble Sort é um algoritmo simples que percorre a lista várias vezes, comparando elementos adjacentes e trocando-os de lugar se estiverem na ordem errada. Este processo continua até que a lista esteja ordenada.

### Requisitos

- **Entrada**: Uma lista de números inteiros (array).
- **Saída**: A lista de números inteiros ordenada em ordem crescente.
- **Ambiente**: Node.js

### Passos

1. Crie um arquivo chamado `bubbleSort.js`.
2. Implemente uma função chamada `bubbleSort` que receba um array de números inteiros como parâmetro.
3. A função deve ordenar o array utilizando o algoritmo Bubble Sort e retornar o array ordenado.
4. Adicione um trecho de código para testar sua função com diferentes arrays de números inteiros e exiba os resultados no console.

### Dicas

- Lembre-se de utilizar loops para percorrer a lista e realizar as comparações e trocas necessárias.
- Utilize variáveis auxiliares se necessário para ajudar nas trocas de elementos.
- Verifique se a lista já está ordenada em cada iteração para otimizar o algoritmo.

### Exemplo de Uso

```javascript
const bubbleSort = (arr) => {
    // Sua implementação aqui
};

// Teste com alguns arrays
let arr1 = [64, 34, 25, 12, 22, 11, 90];
let arr2 = [5, 1, 4, 2, 8];

console.log("Array original:", arr1);
console.log("Array ordenado:", bubbleSort(arr1));

console.log("Array original:", arr2);
console.log("Array ordenado:", bubbleSort(arr2));
