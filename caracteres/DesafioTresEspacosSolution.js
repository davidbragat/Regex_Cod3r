const texto = 'a   b';

console.log(texto.match(/\w\s{3}\w/g))
console.log(texto.match(/a\s{3}b/g))