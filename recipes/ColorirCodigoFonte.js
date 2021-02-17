const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`);

const files = require('./files');
const texto = files.read('CodigoFonte.html');

const codeRegex = /<code>([\S\s]*)<\/code>/gi;
let codigo = texto.match(codeRegex)[0];

//String Selection
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178');

//palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf');

// tipos
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2');

//comentários
codigo = aplicarCor(codigo, /(\/\*[\S\s]*\*\/)/g, '267703');

//comentários de uma linha
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703');

const conteudoFinal = texto.replace(codeRegex, codigo);

files.write('codigoFonte.html', conteudoFinal);
