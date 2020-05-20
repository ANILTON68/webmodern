let contador = 1
while(contador <=10){
    console.log(`contador = ${contador}`)
    contador++
}

for(var i = 1; i <= 10; i++ ){
    console.log(`i = ${i}`)
}

// FOR / IN

const nota = [6, 7, 8, 3]

for(a in nota){
    console.log(`a = ${a}; nota[a] = ${nota[a]}`)

}
