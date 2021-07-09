// [] classe de caracteres
// () agrupamento de caracteres

const str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut quas neque eaque dolores tempore fuga quam. Ipsam inventore exercitationem iusto. Nostrum optio consectetur repellendus eius doloribus blanditiis libero nulla!"

const reg = str.match(/l/g)
const reg2 = str.match(/\w/g)
const reg3 = str.match(/\d/g)
const reg4 = str.match(/do|po/g)
const reg5 = str.match(/[aeiou]/g)
const reg6 = str.match(/(quas)|(doloribus)/g)
const reg7 = str.match(/[a-z]/g)
const reg8 = str.replace(/re/g, 'XXX')
const reg9 = str.replace(/(re)/g, '--$1--')
const reg10 = str.replace(/(r)(e)/g, '--$2--')
const reg11 = str.replace(/(r)(e)/g, '--$&--')
const reg12 = str.replace(/(r)(e)/g, function(total, r, e) {
    return (r + e).toUpperCase()
})
const reg13 = str.replace(/(\w)(\w)/g, function(total, letter1, letter2) {
    return letter1.toUpperCase() + letter2.toLowerCase()
})
console.log(reg13)