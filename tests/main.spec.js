/* eslint no-unused-expressions: "off", curly: "error" */

import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
  // smoke tests
  describe('Somke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.be.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.be.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.be.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.be.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 whe sum(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 whe Sub(6,2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });

  describe('mult', () => {
    it('should return 4 whe mult(2,2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('div', () => {
    it('should return 1 whe div(2,2)', () => {
      expect(div(2, 2)).to.be.equal(1);
    });

    it('should return `Não é possível divisão por zero!` whe div(2,0)', () => {
      expect(div(2, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });
});
