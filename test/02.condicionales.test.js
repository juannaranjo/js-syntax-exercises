const { expect } = require('chai');

const {
  respuestaCedula,
  respuestaMayor,
  respuestaMenor,
  respuestaBostezo,
  respuestaDormido,
} = require('../modules/condicionales.m');

describe('Condicionales', function() {
  it('Mayor que', function() {
    expect(respuestaMayor).to.equal('Ya debe estar jubilado');
  });
  it('Menor que', function() {
    expect(respuestaMenor).to.equal('No ha nacido');
  });
  it('Igualdad', function() {
    expect(respuestaCedula).to.equal('Ya tiene cedula');
  });
  describe('Composicion de condicionales', function() {
    it('OR', function() {
      expect(respuestaBostezo).to.equal('Va a bostezar');
    });
    it('AND', function() {
      expect(respuestaDormido).to.equal('Se quedo dormido');
    });
  });
});
