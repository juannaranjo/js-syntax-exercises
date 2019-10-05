const { assert, expect } = require('chai');

const { persona } = require('../modules/objetos.m');

describe('Objetos', function() {
  it('Persona tiene propiedad "nombre"', function() {
    assert.typeOf(persona.nombre, 'string');
  });

  it('Persona tiene propiedad "edad"', function() {
    assert.typeOf(persona.edad, 'number');
  });

  it('Agregar propiedad "colegio"', function() {
    assert.typeOf(persona.colegio, 'string');
  });
});
