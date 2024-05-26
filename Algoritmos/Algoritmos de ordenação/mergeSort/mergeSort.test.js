// mergeSort.test.js
const mergeSort = require('./index');

describe('Merge Sort Algorithm', () => {
    test('should sort an array of numbers in ascending order', () => {
        const arr = [64, 34, 25, 12, 22, 11, 90];
        const sortedArr = [11, 12, 22, 25, 34, 64, 90];
        expect(mergeSort(arr)).toEqual(sortedArr);
    });

    test('should handle an empty array', () => {
        const arr = [];
        const sortedArr = [];
        expect(mergeSort(arr)).toEqual(sortedArr);
    });

    test('should handle an array with one element', () => {
        const arr = [5];
        const sortedArr = [5];
        expect(mergeSort(arr)).toEqual(sortedArr);
    });

    test('should handle an array with duplicate elements', () => {
        const arr = [3, 5, 3, 2, 2, 8];
        const sortedArr = [2, 2, 3, 3, 5, 8];
        expect(mergeSort(arr)).toEqual(sortedArr);
    });

    test('should handle a large array of random numbers', () => {
        const generateRandomArray = (size, max) => {
            return Array.from({ length: size }, () => Math.floor(Math.random() * max));
        };

        const arr = generateRandomArray(1000, 10000);
        const sortedArr = [...arr].sort((a, b) => a - b);
        expect(mergeSort(arr)).toEqual(sortedArr);
    });
});
