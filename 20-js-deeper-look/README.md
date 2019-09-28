# Deeper Look into JavaScript
## Execution Context
* Callstack
* Global()
  * Global Object
  * this
  * What happens when we declare global variables?

## Variable Scope (Lexical Environment)
* What variables do my function (my execution context have access to?)

* Scope lookup
```
var poop = "poop"
function first() {
  console.log(poop)
}

function second() {
  var poop = "POOP"
  console.log(poop)
}

console.log(poop)

function three() {
  poop = "P00P"
  var hello = "hello"
}

console.log(poop)
console.log(hello)


var tony = "TONY"

function sayHi() {
  console.log(tony)
}

function sayHi2() {
  var tony = "tonnnyyyyy"
  sayHi()
}
```

* Does not matter where the function is called, but where it is written.

* Global Scope Leakage and how to prevent.
```
function() {
  poop = 'poop'
}
```

### Block Scope, Function Scope
* `let` and `const` vs `var`

### `this`
* The object that the function is a part of.
  * everything in javascript is lexically scoped EXCEPT for this.
  * call(), apply(), bind()
    * call - invokes a function but can replace *this* with another object.
    * apply - same as call but takes in array of arguments.
    * create a new function with a different *this*
  * arrow functions

