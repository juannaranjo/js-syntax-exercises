const { expect, assert } = require('chai');

const { resta, hola, vejez } = require('../modules/funciones.m');

describe('Funciones', function() {
  it('funcion "hola"', function() {
    assert.typeOf(hola, 'function');
  });
  it('funcion "resta"', function() {
    expect(resta(1, 1)).to.equal(0);
    expect(resta(10, 1)).to.equal(9);
  });
  it('funcion "vejez"', function() {
    expect(vejez(30)).to.equal('Es adulto');
    expect(vejez(18)).to.equal('Es adulto');
    expect(vejez(10)).to.equal('No es adulto');
  });
});
