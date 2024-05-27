## Estrutura do Projeto

### 1. Implementação do QuickSort (`quickSort.js`)

```javascript
// quickSort.js

// Função auxiliar para troca de elementos
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

// Função principal do QuickSort
const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
};

// QuickSort com primeiro elemento como pivô
const quickSortFirst = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSortFirst(left), pivot, ...quickSortFirst(right)];
};

// QuickSort com último elemento como pivô
const quickSortLast = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSortLast(left), pivot, ...quickSortLast(right)];
};

// QuickSort com elemento aleatório como pivô
const quickSortRandom = (arr) => {
    if (arr.length <= 1) return arr;

    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue;
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSortRandom(left), pivot, ...quickSortRandom(right)];
};

module.exports = {
    quickSort,
    quickSortFirst,
    quickSortLast,
    quickSortRandom
};