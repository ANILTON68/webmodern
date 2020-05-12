console.log(typeof Object);

class produto {}
console.log(produto);

// função sem retorno
function imprimir_soma(a, b) {
  console.log(a + b);
}
imprimir_soma(2, 3)
imprimir_soma(3, 5, 9)

// Função com retorno
function soma(a, b) {
    return a+b
}
console.log(soma(4, 7))

// Armazenar uma constante a uma variavel
const print_soma = function(a, b) {
   console.log(a+b) 
}
print_soma(4, 8)

// Armazenar uma função arrow
const plus = (a, b)=>{
    return a+b
}
