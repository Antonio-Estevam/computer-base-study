const Pilha = require('./index.js');

describe('Pilha', () => {
    let pilha;

    beforeEach(() => {
        pilha = new Pilha();
    });

    test('Deve iniciar com a pilha vazia', () => {
        expect(pilha.isEmpty()).toBe(true);
    });

    test('Deve adicionar elementos à pilha usando push', () => {
        pilha.push(10);
        expect(pilha.isEmpty()).toBe(false);
        expect(pilha.peek()).toBe(10);
    });

    test('Deve remover elementos da pilha usando pop', () => {
        pilha.push(20);
        pilha.push(30);
        expect(pilha.pop()).toBe(30);
        expect(pilha.peek()).toBe(20);
    });

    test('Deve retornar o topo da pilha usando peek sem removê-lo', () => {
        pilha.push(40);
        pilha.push(50);
        expect(pilha.peek()).toBe(50);
        expect(pilha.pop()).toBe(50);
        expect(pilha.peek()).toBe(40);
    });

    test('Deve retornar null ao usar pop ou peek em uma pilha vazia', () => {
        expect(pilha.pop()).toBeNull();
        expect(pilha.peek()).toBeNull();
    });
});
