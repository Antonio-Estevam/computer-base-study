## Desafio: Implementação do Merge Sort em Node.js

### Objetivo

Implementar o algoritmo de ordenação Merge Sort em Node.js e testar a funcionalidade com diferentes arrays.

### Tarefas

1. Crie uma função `mergeSort(arr)` que receba um array `arr` de números como entrada e retorne um array ordenado.
2. Implemente a função `merge(left, right)` que será utilizada pela função `mergeSort` para combinar dois arrays ordenados.

### Requisitos

- Utilize a técnica de "dividir para conquistar" para dividir o array em sub-arrays até que cada sub-array tenha um elemento.
- Combine os sub-arrays de forma ordenada.
- Teste a função com arrays de diferentes tamanhos e valores, incluindo arrays vazios e arrays com um único elemento.

## Resolução

A solução implementa o algoritmo Merge Sort de forma recursiva, dividindo o array em sub-arrays até que cada sub-array tenha um único elemento, e depois combinando esses sub-arrays de forma ordenada.

### Explicação do Código

#### Função `mergeSort`

- Verifica se o array tem um ou zero elementos, retornando-o diretamente.
- Calcula o ponto médio do array e o divide em duas metades (`left` e `right`).
- Aplica recursivamente o `mergeSort` nas duas metades.
- Combina as duas metades ordenadas usando a função `merge`.

#### Função `merge`

- Combina dois arrays ordenados (`left` e `right`) em um único array ordenado (`result`).
- Usa dois índices (`leftIndex` e `rightIndex`) para percorrer os dois arrays.
- Compara os elementos dos arrays e adiciona o menor ao array resultante.
- Quando um dos arrays é completamente percorrido, adiciona o restante do outro array ao resultado.

### Conclusão

O Merge Sort é um algoritmo eficiente para ordenação de arrays, com complexidade de tempo O(n log n) no pior caso. Este desafio ajuda a entender a implementação recursiva e a técnica de "dividir para conquistar". Testes automatizados com Jest garantem a corretude da implementação.






### Estrutura do Arquivo

Crie um arquivo chamado `mergeSort.js` e escreva sua implementação nele.

```javascript
// mergeSort.js

// Função principal do Merge Sort
const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
};

// Função para combinar dois arrays ordenados
const merge = (left, right) => {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
};

// Teste com alguns arrays
let arr1 = [64, 34, 25, 12, 22, 11, 90];
let arr2 = [5, 1, 4, 2, 8];
let arr3 = [];
let arr4 = [42];

console.log("Array original:", arr1);
console.log("Array ordenado:", mergeSort(arr1));

console.log("Array original:", arr2);
console.log("Array ordenado:", mergeSort(arr2));

console.log("Array original:", arr3);
console.log("Array ordenado:", mergeSort(arr3));

console.log("Array original:", arr4);
console.log("Array ordenado:", mergeSort(arr4));

module.exports = mergeSort; 




