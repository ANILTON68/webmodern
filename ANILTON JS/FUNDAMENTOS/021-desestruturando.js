const guia = {
    nome: 'Ana',
    rumo: 'ignorado',
    ida: 'Lagoa',
    volta: 'centro'

}

const {rumo, ida} = guia
console.log(rumo,ida)

// Com Array
const [a] =[10]
console.log(a)

const [, [, nota]] = [
    [, 8, 8 ],
    [9, 6, 8]
]
console.log(nota)

// Mais um exemplo

function rand({ min = 2, max = 50}) {
    const valor = Math.random() * ( max - min) + min
    return Math.floor(valor)
}
const obj3 = { max: 49, min: 10}
console.log(rand(obj3))


