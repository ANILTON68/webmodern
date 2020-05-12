// Usando for: laço de repetição, declaração, condição, e incremento
for (var i = 0; i < 5; i++) {
    console.log(i)
}

console.log('i =', i)

// Outro exemplo
const func = []

for (var i = 0; i < 5; i++) {
    func.push(function(){
        console.log(i)
    })
}
func[2]()
func[4]()
