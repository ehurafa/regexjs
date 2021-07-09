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
console.log(reg7)