class Pilha {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null; // ou poderia lançar um erro
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null; // ou poderia lançar um erro
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Pilha;
