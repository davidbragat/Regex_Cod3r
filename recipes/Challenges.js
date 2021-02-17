const phone = `Lista telefônica:
    - (021) 12345-6789
    - (11) 62300-2234
    - 5678-7771
    - (85)3333-7890
    - (1) 4321-12334`;

const ip = `Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256
256.256.256.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0`;

const senha = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!`

// const intervalo = '0 1 10 192 199 201 249 255 256 312 1010 1512';
// const regexRange = /\b\d{1,2}\b|\b1\d{2}\b|\b2[0-4]\d\b|\b2[0-5][0-5]\b/g
// const regexRangeIP = /((\b\d{1,2}\b|\b1\d{2}\b|\b2[0-4]\d\b|\b2[0-5][0-5]\b)\.?){4}/g;

// // console.log(phone.match(/(\(\d{2,3}\)\s?)?(\d{4,5})-?(\d{4,5})/g));
// console.log(intervalo.match(regexRange));
// console.log(ip.match(regexRangeIP));

console.log(senha.match(/^(?=.*12)(?=.*[^a-z]).{3,8}$/gm));


