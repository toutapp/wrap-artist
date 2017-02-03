import wrap from '../';
import { expect } from 'chai';

describe('wrap', () => {
  describe('basics', () => {
    it('wraps the given fn in a Promise', () => {
      expect(wrap).to.be.a('function');
    });

    it('raises an error when no function is passed', () => {
      expect(wrap).to.throw(Error);
    });
  });

  describe('with no args', () => {
    xit('wraps the fn with no args', () => {
      expect(1).to.equal(1);
    });
  });

  describe('with one arg', () => {
    xit('wraps the fn with one arg', () => {
      expect(1).to.equal(1);
    });
  });

  describe('with more than one arg', () => {
    xit('wraps the fn with multiple args', () => {
      expect(1).to.equal(1);
    });
  });
});
