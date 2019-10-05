const chai = require('chai');
const expect = chai.expect;

const { lista } = require('../modules/arrays.m');

describe('Arrays', function() {
  it('La lista tiene al menos 3 elementos', function() {
    expect(lista.length >= 3).to.equal(true);
  });

  it('Cambiar el primer elemento de la lista', function() {
    expect(lista[0]).to.equal('Primero');
  });
});
