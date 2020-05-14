function compras(t1, t2){
    const comprar = t1 || t2
    const sair = t1 && t2
    const sair_e_comprar = t1 != t2 // xor
    const lisus = !comprar

    return{comprar, sair, sair_e_comprar, lisus}
}
 console.log(compras(true, true))
 console.log(compras(true, false))
 console.log(compras(false, true))
 console.log(compras(false, false))
 console.log(compras(true, false) == compras(false, true))
