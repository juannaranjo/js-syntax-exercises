const fs = require('fs');
const path = require('path');

data = fs.readFileSync(path.resolve('./ejercicios/01.variables.js'), 'utf8');
eval(data);

module.exports = {
  nombre: typeof nombre !== 'undefined' ? nombre : null,
  edad: typeof edad !== 'undefined' ? edad : null,
};
