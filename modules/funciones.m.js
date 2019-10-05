const fs = require('fs');
const path = require('path');

data = fs.readFileSync(path.resolve('./ejercicios/03.funciones.js'), 'utf8');
eval(data);

module.exports = {
  hola: typeof hola !== 'undefined' ? hola : null,
  resta: typeof resta !== 'undefined' ? resta : null,
  vejez: typeof vejez !== 'undefined' ? vejez : null,
};
