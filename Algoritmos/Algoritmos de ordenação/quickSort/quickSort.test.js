// quickSort.test.js
const { quickSortFirst, quickSortLast, quickSortRandom } = require('./index');

describe('QuickSort', () => {
    const arrays = [
        { input: [10, 80, 30, 90, 40, 50, 70], expected: [10, 30, 40, 50, 70, 80, 90] },
        { input: [5, 1, 4, 2, 8, 0, 3, 7, 6, 9], expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { input: [], expected: [] },
        { input: [42], expected: [42] },
        { input: [3, -1, 4, 1, 5, 9, 2, 6, 5, 3, 5], expected: [-1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9] }
    ];

    describe('quickSortFirst', () => {
        arrays.forEach(({ input, expected }) => {
            test(`sorts ${input} correctly`, () => {
                expect(quickSortFirst([...input])).toEqual(expected);
            });
        });
    });

    describe('quickSortLast', () => {
        arrays.forEach(({ input, expected }) => {
            test(`sorts ${input} correctly`, () => {
                expect(quickSortLast([...input])).toEqual(expected);
            });
        });
    });

    describe('quickSortRandom', () => {
        arrays.forEach(({ input, expected }) => {
            test(`sorts ${input} correctly`, () => {
                expect(quickSortRandom([...input])).toEqual(expected);
            });
        });
    });
});
