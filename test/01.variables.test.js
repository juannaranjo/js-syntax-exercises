const { assert } = require('chai');

const variables = require('../modules/variables.m');

describe('Variables', function() {
  it('Crear la variable "nombre"', function() {
    assert.typeOf(variables.nombre, 'string');
  });
  it('Crear la variable "edad"', function() {
    assert.typeOf(variables.edad, 'number');
  });
});
