const fs = require('fs');
const path = require('path');

data = fs.readFileSync(path.resolve('./ejercicios/06.objetos.js'), 'utf8');
eval(data);

module.exports = {
  persona: persona,
};
