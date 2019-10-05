const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai);

const ciclos = require('../modules/ciclos.m');

describe('Ciclos', function() {
  it('Ciclo for', function() {
    const spy = sinon.spy();
    ciclos.cicloFor(spy);
    expect(spy).to.have.been.calledThrice;
  });

  it('Ciclo while', function() {
    const spy = sinon.spy();
    ciclos.cicloWhile(spy);
    expect(spy).to.have.been.calledThrice;
  });
});
