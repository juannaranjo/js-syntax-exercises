const fs = require('fs');
const path = require('path');

data = fs.readFileSync(path.resolve('./ejercicios/04.arrays.js'), 'utf8');
eval(data);

module.exports = {
  lista: lista,
};
