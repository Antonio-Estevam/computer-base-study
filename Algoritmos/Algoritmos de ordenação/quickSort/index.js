// quickSort.js

// QuickSort com pivô como o primeiro elemento
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

// QuickSort com pivô como o último elemento
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

// QuickSort com pivô aleatório
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

// Função para medir o tempo de execução
const measureTime = (sortFunction, arr) => {
    const start = Date.now();
    sortFunction([...arr]); // Usar cópia do array original
    const end = Date.now();
    return end - start;
};

// Teste com alguns arrays
let arr1 = [10, 80, 30, 90, 40, 50, 70];
let arr2 = [5, 1, 4, 2, 8, 0, 3, 7, 6, 9];
let arr3 = [];
let arr4 = [42];
let arr5 = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

console.log("Array original:", arr1);
console.log("Array ordenado (First):", quickSortFirst(arr1));
console.log("Array ordenado (Last):", quickSortLast(arr1));
console.log("Array ordenado (Random):", quickSortRandom(arr1));

console.log("Array original:", arr2);
console.log("Array ordenado (First):", quickSortFirst(arr2));
console.log("Array ordenado (Last):", quickSortLast(arr2));
console.log("Array ordenado (Random):", quickSortRandom(arr2));

console.log("Tempo de execução para arr5 (First):", measureTime(quickSortFirst, arr5), "ms");
console.log("Tempo de execução para arr5 (Last):", measureTime(quickSortLast, arr5), "ms");
console.log("Tempo de execução para arr5 (Random):", measureTime(quickSortRandom, arr5), "ms");

module.exports = { quickSortFirst, quickSortLast, quickSortRandom };
