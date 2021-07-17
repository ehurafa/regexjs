const text = 'Bom\ndia'

console.log(text.match(/./gi))
console.log(text.match(/.../gi))
console.log(text.match(/..../gi)) // o ponto não engloba o \n

// dotall - algumas linguagens tem uma flag /exp/s mas JS não suporta!