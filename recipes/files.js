const fs = require('fs');

const read = fileName => {
    return fs.readFileSync(`${__dirname}/originais/${fileName}`, { encoding: 'utf8' });
};

const write = (fileName, content) => {
    const dirname = `${__dirname}/destiny`;

    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }

    fs.writeFileSync(`${dirname}/${fileName}`, content, { enconding: 'utf8' });
};

module.exports = { read, write };
