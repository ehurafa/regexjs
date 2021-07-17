// no inicio...
// Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500 caracteres
// +Simbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes Variável - Expansível
// Suporte a mais de 1 milhão de caracteres
// Atualmente tem mais de 100.000 caracteres atribuídos

// https://unicode-table.com/pt

const text = 'aϖжr'

console.log(text.match(/\u03D6|\u0436/g))