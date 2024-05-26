# Bubble Sort em Node.js

## Descrição
Este projeto contém uma implementação do algoritmo de ordenação Bubble Sort em Node.js. O Bubble Sort é um algoritmo de ordenação simples que itera repetidamente através da lista, comparando elementos adjacentes e trocando-os de lugar se estiverem na ordem errada. Este processo continua até que a lista esteja ordenada.

## Funcionamento do Bubble Sort
O Bubble Sort percorre a lista várias vezes. Em cada passagem, ele compara cada par de elementos adjacentes e os troca se estiverem na ordem errada. Após cada passagem, o próximo maior elemento "borbulha" para a sua posição correta. Este processo é repetido até que não sejam necessárias mais trocas, indicando que a lista está ordenada.

## Implementação

### Código
```javascript
const bubbleSort = (arr) => {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca direta usando desestruturação
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // Cada iteração finaliza com o maior elemento no final da lista
        n--;
    } while (swapped);

    return arr;
};

// Teste com alguns arrays
let arr1 = [64, 34, 25, 12, 22, 11, 90];
let arr2 = [5, 1, 4, 2, 8];

console.log("Array original:", arr1);
console.log("Array ordenado:", bubbleSort(arr1));

console.log("Array original:", arr2);
console.log("Array ordenado:", bubbleSort(arr2));
```
## Explicação do Código

### Inicialização de Variáveis

- `n` armazena o comprimento do array.
- `swapped` é uma variável booleana que indica se houve alguma troca na iteração atual.

### Laço `do...while`

- Continua executando enquanto houver trocas (`swapped` for `true`).

### Laço `for`

- Percorre o array até `n - 1` para comparar elementos adjacentes.

### Condição e Troca

- Se `arr[i]` for maior que `arr[i + 1]`, trocamos os elementos usando a desestruturação `[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]`.
- Definimos `swapped` como `true` para indicar que houve uma troca.

### Redução do Limite

- Após cada iteração, o maior elemento "borbulha" para o final do array, portanto podemos reduzir `n` para evitar comparações desnecessárias.

### Benefícios da Desestruturação

- **Simplicidade**: Reduz a quantidade de código necessário para trocar dois valores.
- **Legibilidade**: Facilita a leitura e entendimento do código.
- **Eficiência**: Elimina a necessidade de variáveis temporárias adicionais.

## Como Executar

Para executar o código, salve-o em um arquivo chamado `bubbleSort.js` e execute o comando a seguir no terminal:

```bash
node bubbleSort.js
