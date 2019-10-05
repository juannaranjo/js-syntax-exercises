const fs = require('fs');
const path = require('path');

data = fs.readFileSync(path.resolve('./ejercicios/05.ciclos.js'), 'utf8');
eval(data);

module.exports = {
  cicloFor: cicloFor,
  cicloWhile: cicloWhile,
};
