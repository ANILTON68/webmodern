var sera = 'será!!'
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
// console.log(local)

// Outra forma
var numero = 1
{
    var numero = 2
    console.log('dentro=',numero)

}
console.log('fora =', numero)