let i = 9
for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log('i =', i)

// Outro exemplo
const func = []

for (let i = 0; i < 5; i++) {
    func.push(function(){
        console.log(i)
    })
}
func[2]()
func[4]()