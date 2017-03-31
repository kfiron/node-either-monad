# node-either-monad

Either monad, good pattern to use when you have a function that may returns totally two different types

## install

```js
npm install --save node-either-monad
```

## usage


```js
const either = require('node-either-monad')

let left = either.left('data') // left
let right = either.right('data') //right

left.isLeft() // true
right.isRight() // true

let dataFolded = either.fold(x => 'd' + x, y => y +4);

let left.swap() /// returns right with the same data
let right.swap() /// returns left with the same data

left.a // data of the left side
right.b // data of the right side

```




















