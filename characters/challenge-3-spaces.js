const text = 'a   b'
// dar match no texto com 3 espaços

console.log(text.match(/a   b/))
console.log(text.match(/a\s\s\sb/))
console.log(text.match(/a\s{3}b/))
console.log(text.match(/a {3}b/))
console.log(text.match(/. {3}./))
console.log(text.match(/\w {3}\w/))