
const bubbleSort = require('./index');

const generateRandomArray = (size, max) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
};

describe('Bubble Sort Algorithm', () => {
    test('should sort an array of numbers in ascending order', () => {
        const arr = [64, 34, 25, 12, 22, 11, 90];
        const sortedArr = [11, 12, 22, 25, 34, 64, 90];
        expect(bubbleSort(arr)).toEqual(sortedArr);
    });

    test('should handle an empty array', () => {
        const arr = [];
        const sortedArr = [];
        expect(bubbleSort(arr)).toEqual(sortedArr);
    });

    test('should handle an array with one element', () => {
        const arr = [5];
        const sortedArr = [5];
        expect(bubbleSort(arr)).toEqual(sortedArr);
    });

    test('should handle an array with duplicate elements', () => {
        const arr = [3, 5, 3, 2, 2, 8];
        const sortedArr = [2, 2, 3, 3, 5, 8];
        expect(bubbleSort(arr)).toEqual(sortedArr);
    });

    test('should handle a large array of random numbers', () => {
        const arr = generateRandomArray(1000, 10000);
        const sortedArr = [...arr].sort((a, b) => a - b);
        expect(bubbleSort(arr)).toEqual(sortedArr);
    });
});
