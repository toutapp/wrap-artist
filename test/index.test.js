import wrap from '../';
import { expect } from 'chai';

describe('wrap', () => {
  describe('basics', () => {
    it('wraps the given fn in a Promise', () => {
      const p = wrap(() => {});
      expect(p.constructor.name).to.equal('Promise');
      expect(p.then).to.be.a('function');
    });

    it('raises an error when no function is passed', () => {
      expect(wrap).to.throw(Error);
    });
  });

  describe('with no args', () => {
    it('wraps the fn with no args', () => {
      const foo = (cb) => {
        setImmediate(() => {
          cb(null, 'win win win');
        });
      };

      let fooPromise = wrap(foo);

      fooPromise.then((text) => {
        expect(text).to.equal('win win win');
      });
    });
  });

  describe('with one arg', () => {
    it('wraps the fn with one arg', () => {
      const foo = (arg1, cb) => {
        setImmediate(() => {
          cb(null, `arg1 is: ${arg1}`);
        });
      };

      let fooPromise = wrap(foo, 'chance');

      fooPromise.then((text) => {
        expect(text).to.equal('arg1 is: chance');
      });
    });
  });

  describe('with more than one arg', () => {
    it('wraps the fn with multiple args', () => {
      const foo = (arg1, arg2, cb) => {
        setImmediate(() => {
          cb(null, `arg1 => ${arg1} & arg2 => ${arg2}`);
        });
      };

      let fooPromise = wrap(foo, 'beats', 'bose');

      fooPromise.then((text) => {
        expect(text).to.equal('arg1 => beats & arg2 => bose');
      });
    });
  });
});
