const text = 'Você precisa responder sim. não ou não sei!'

console.log(text.match(/sim|não|sei/g))
console.log(text.match(/sim|não|não sei/g))
console.log(text.match(/sim|não sei|não/g))