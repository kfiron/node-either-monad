'use strict';
const expect = require('chai').expect,
  either = require('..');

describe('node either monad', () => {

  const object = {foo: 'bar'};
  const left = either.left(10);
  const right = either.right(20);

  it('isLeft()', () => {
    expect(either.left(object).isLeft()).to.be.true;
    expect(either.right(object).isLeft()).to.be.false;
  });
  it('isRight()', () => {
    expect(either.right(object).isRight()).to.be.true;
    expect(either.left(object).isRight()).to.be.false;
  });
  it('fold()', () => {
    expect(left.fold(x => x+1, x => x+1)).to.be.equal(11);
    expect(right.fold(x => x+1, x => x+1)).to.be.equal(21);
  });
  it('a', () => {
    expect(either.left(object).a).to.be.equal(object);
  });
  it('b', () => {
    expect(either.right(object).b).to.be.equal(object);
  });
  it('swap', () => {
    expect(either.right(object).swap().isLeft()).to.be.true;
    expect(either.left(object).swap().isRight()).to.be.true;
  });


});
