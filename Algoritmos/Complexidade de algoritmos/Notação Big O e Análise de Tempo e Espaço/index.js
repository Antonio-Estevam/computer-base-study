/*
Desafio para Implementação
Desafio: Crie uma função em JavaScript que verifique se uma string é um anagrama de outra string. Duas strings são anagramas se contêm exatamente os mesmos caracteres, com as mesmas quantidades, mas em qualquer ordem.

Por exemplo:

"listen" e "silent" são anagramas.
"hello" e "world" não são anagramas.
Requisitos:

A função deve ignorar espaços e diferenças entre maiúsculas e minúsculas.
A função deve ter um bom desempenho para entradas de até 100.000 caracteres.
*/

function isAnagram(str1, str2) {
    const firstArray = str1.toLowerCase().split('')
    const lastArray = str2.toLowerCase().split('')

    if(firstArray.length === lastArray.length){
        
        let index = 0;
        let varIsAnagram = false

        do {
            varIsAnagram = lastArray.includes(firstArray[index])
            if(!varIsAnagram){
                break
            }
            index ++
        }while (index < firstArray.length && varIsAnagram == true)

return varIsAnagram
    }else{
        return false 
    }
    
}

module.exports = isAnagram;
