function nota(nota){
    if(nota >= 7){
        console.log('Aprovado com ' +nota)
    }
}
nota(7.4)
nota(6.8)
nota(7.1)

// iF teste 1

// Não usar ';' nos blocos de controle

// else
function resultado(nota){
    if(nota >= 7){
        console.log('Aprovado')
    } else{
        console.log('Reprovado')
    }
}
resultado(9)
resultado(3)


// IF/ELSE
Number.prototype.entre = function(início, fim){
    return this >= início && this <= fim

   
} 
const imprimir = function(nota){
    if(nota.entre(8.5, 10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7, 8.49)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('recuperação')

    }else if(nota.entre(0, 3.99))
    console.log('Reprovado')
}
imprimir(9)
imprimir(8)
imprimir(6)
imprimir(2)
imprimir('fim')