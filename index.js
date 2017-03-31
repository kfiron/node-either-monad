'use strict';

module.exports.left = obj => iLeft(obj);
module.exports.right = obj => iRight(obj);

const iLeft = obj => {
  return {
    isLeft: () => true,
    isRight: () => false,
    fold: (left, right) => left(obj),
    a: obj,
    swap: ()=> iRight(obj)
  };
};

const iRight = obj => {
  return {
    isLeft: () => false,
    isRight: () => true,
    fold: (left, right) => right(obj),
    b: obj,
    swap: ()=> iLeft(obj)
  };
};


