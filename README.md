# node-either-monad

Either monad, good pattern to use when you have a function that may returns totally two different types

## install

```js
npm install --save node-either-monad
```

## usage


```js
const either = require('node-either-monad')

let left = either.left(1) // left
let right = either.right('data') //right

left.isLeft() // true
right.isRight() // true

let dataFolded = left.fold(x => x + 1, y => y + '-k'); // 2
let dataFolded = right.fold(x => x + 1, y => y + '-k'); // data-k

let left.swap() /// returns right with the same data
let right.swap() /// returns left with the same data

left.a // data of the left side
right.b // data of the right side

```




















