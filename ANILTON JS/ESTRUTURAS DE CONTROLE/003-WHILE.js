function aleatório(min, max){
    const valor = Math.random() *(max - min) + min
    return Math.floor(valor)
}

let opção = 0

while(opção != -1){
    opção = aleatório(-1, 10)
    console.log(`Opção escolhida foi ${opção}.`)
}

console.log('findou')

// Do/ while

do{
    opção = aleatório(-1, 10)
    console.log(`Opção escolhida foi ${opção}.`)
} while(opção != -1)

console.log('findou')
