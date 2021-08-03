let frutas = ['laranja', 'maçã', 'banana', 'melancia']

// push(): inserção no final do vetor
frutas.push('morango')

console.log(frutas)

// unshift(): insersão no inicio do vetor
frutas.unshift('maracuja')

console.log(frutas)

// splice(): inserção em posição intermediária
// parametros:
// 1º: a posição para inserção
// 2º: quantos elementos serão apagados? (na inserção, informamos 0)
// 3º: o novo elemento  a ser inserido
frutas.splice(3, 0,'mamão') // na posição 3, não retirar ninguém e inserir o mamão
console.log(frutas)


// pop(): retira o ultimo elemento do vetor
let ultimo = frutas.pop()
console.log(ultimo, frutas)

// shift(): retira o primeiro elemento do vetor
let primeiro = frutas.shift()
console.log(primeiro, frutas)

// splice(): inserção em posição intermediária
// parametros:
// 1º: a posição para inserção
// 2º: quantos elementos serão apagados? (na inserção, informamos 0)
// 3º: o novo elemento  a ser inserido
// splice(): SEMPRE retornará um vetor, mesmo que vazio, na remoção
let intermed = frutas.splice(3, 1) 
console.log(intermed, frutas)

// Os métodos de inserção (push, unshift e splice() ) são capazes
// de inserir vários elementos de uma única vez
frutas.push('jabuticaba', 'abacaxi', 'amora', 'abacate')
console.log(frutas)
console.log('-----------------------------------------------------------')
// Percurso (1): for tradicional | vetor.length()
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

console.log('-----------------------------------------------------------')
// Percurso (2): for tradicional em ordem inversa| vetor.length()
for(let i = frutas.length - 1; i >=0; i--){
    console.log(frutas[i])
}

console.log('-----------------------------------------------------------')
// Percurso (3): for..of
for(let f of frutas){
    console.log(f)
}

console.log('-----------------------------------------------------------')