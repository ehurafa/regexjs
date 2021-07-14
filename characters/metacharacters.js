// . ? * + - ^ $  [] {} () \ :

const text = '1,2,3,4,5,6,a.b c!d?e'

const pointReg = /\./

const symbolReg = /,|\.|\?|!| /g

console.log(text.split(symbolReg))