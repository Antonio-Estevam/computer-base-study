const bubbleSort = (arr) => {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca de elementos
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // Cada iteração finaliza com o maior elemento no final da lista
        n--;
    } while (swapped);

    return arr;
};

module.exports = bubbleSort