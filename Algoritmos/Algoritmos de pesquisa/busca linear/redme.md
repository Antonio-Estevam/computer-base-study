# Desafio: Implementar a Busca Linear em Node.js

## Objetivo
Crie um script em Node.js que implemente o algoritmo de busca linear para encontrar um número específico em uma lista de números.

## Requisitos
O script deve receber dois argumentos da linha de comando:

1. O primeiro argumento é o número a ser encontrado.
2. O segundo argumento é uma lista de números separados por vírgulas.

O script deve realizar a busca linear para encontrar o número na lista. O script deve imprimir a posição do número na lista (começando em 0) se o número for encontrado, ou uma mensagem indicando que o número não está na lista.

## Instruções
1. **Configurar o ambiente**: Certifique-se de ter o Node.js instalado em seu sistema.
2. **Criar o script**: Crie um arquivo chamado `linearSearch.js`.
3. **Implementar a lógica de busca linear**: Escreva a função que realiza a busca linear conforme descrito.
4. **Receber os argumentos da linha de comando**: Utilize `process.argv` para capturar os argumentos.
5. **Executar o script**: Teste o script com diferentes entradas para garantir que ele funciona corretamente.

## Exemplo
Suponha que você salve o script como `linearSearch.js` e execute o comando:

```sh
node linearSearch.js 6 5,3,8,6,2,7
O número 6 foi encontrado na posição 3.