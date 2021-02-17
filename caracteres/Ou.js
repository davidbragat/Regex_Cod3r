const texto = 'Você precisa responder sim, não ou nao sei!'
console.log(texto.match(/sim|não|sei/g)) // alternativa (OU)


console.log(texto.match(/sim|n(ã|a)o/g));
