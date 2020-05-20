const result = function(nota){
    switch(Math.floor(nota)){
       case 10: case 9:
           console.log('Quadro de Honra')
           break;
        case 8: case 7:
            console.log('Aprovado')
          break  
        case 6: case 5: case 4: case 3:
            console.log('Recuperação')
            break
        case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}
result(10)
result(8.9)
result(5)
result(2)
result(11)