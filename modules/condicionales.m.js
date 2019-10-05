const fs = require('fs');
const path = require('path');

data = fs.readFileSync(
  path.resolve('./ejercicios/02.condicionales.js'),
  'utf8'
);
eval(data);

module.exports = {
  respuestaMayor: respuestaMayor,
  respuestaMenor: respuestaMenor,
  respuestaCedula: respuestaCedula,
  respuestaBostezo: respuestaBostezo,
  respuestaDormido: respuestaDormido,
};
