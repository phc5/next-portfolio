---
title: 'YDKJS Notes'
date: '2021-02-14'
snippet: 'I am reading You Dont Know JS by Kyle Simpson and will be jotting down notes and things I have learned so that I can reference them in the future.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
hidden: 'true'
---

## JavaScript Paradigms

JavaScript is a multi-paradigm language. Here are some ways you can write JavaScript:

- Procedural: organizes code in a top-down fashion where code is executed in a linear progression through a pre-determined set of operations that are usually grouped together in units called procedures.
- Object-oriented: organizes code by collecting logic and data together into units called classes.
- Functional programming: organizes code into functions (pure computations as opposed to procedures which may have side effects) and the adaptaions of those functions as values.

## Is JavaScript an interpreted (scripting) or compiled language?

Most people have the opinion that JS is an interpreted language rather than a compiled language. However, in interpreted languages, code is executed top-down without an initial pass through of the program; so if there was an error on line 10, you won't know until lines 1-9 are run. Compare this to a language like JS that has a processing step (called parsing) where an invalid command would be caught on line 10 during this parsing phase before any execution of code. JS source code is parsed before it is executed.

Let's look at an entire flow of a JS program from start to finish:

1. Developer writes JS
2. It gets transpiled by Babel and bundled up by Webpack
3. The JS engine parse the code to an AST
4. The engine converts AST to byte-code which is then refine and converted by the JIT compiler
5. The JS VM executes the program

It's safe to say, JS is a compiled language.

## Strict mode

Strict mode should be used as a guide to do things the best way so that the JS engine has the best chance of optimizing and efficiently running the code. Strict mode makes several changes:

1. Eliminates some JS silent errors by changing them to throw errors.
2. Fixes mistakes that make it difficult for JS engines to perform optimizations.
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

## Each File is a Program

In JS, each standalone file is its own separate program. However, many web applications these days use webpack to bundle multiple files into one and when this happens, JS treats this single combined file as one program.

## Declaring and Using Variables

`let` keyward allows a more limited access to the variable than `var` by using "block scoping" as opposed to function scoping.

`const` declared variables are not "unchangeable", they just can't be reassigned. Try not to use `const` with object values like arrays and objects because their values can be changed.

## Coercive Comparisons

Coercion is the process by which a value of one type is convert4ed to its respective representation in another type. This process comes into play when comparing the two equality operators `==` and `===`.

The `==` operator performs an equality comparson similarly to the `===`: both consider the type of the values being compared and if both values are the same type then they do the same thing. If the types are different then the `==` operator allows coercion while the `===` does not.

## Closure

"Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope." - from YDKJS, Get Started, Chapter 3 by Kyle Simpson

## `this` Keyword

When a function is defined, it is attached to its enclosing scope via closure. Scope is the set of rules that controls how references to variables are resolved. Besides scope, functions also has another mechanism that influences what they can access: the execution context, which is exposed by the `this` keyword.

Scope is static and contains a fixed set of variables available at the moment and location you define a function but a function's execution context is dynmaic and is dependent on how it was called.

```
function soccerGame(referee) {
  return function startGame() {
    console.log(`${referee} blew the whistle to start the ${this.tournamentName} Final`);
  }
}

var game = soccerGame('John Smith');
game(); // John Smith blew the whistle to start the undefined Final.
```

Notice `this.tournamentName` is undefined becuase `this` referres to the global object which does not have a varia

#### Call `game()` on object

```
var uefa = {
  tournamentName: 'Champions League'
}

uefa.game(); // John Smith blew the whistle to start the Champions League Final.
```

#### Use `.call()` or `.apply()`

```
var uefa = {
  tournamentName: 'Champions League'
}

game.call(uefa); // John Smith blew the whistle to start the Champions League Final.
```

## Prototypes

Prototypes are a characteristic of an object whereas `this` is a characteristic of function execution. Prototypes are a linkage between two objects that specifically handle resolution of property access. Say you have two objects, A and B, linked to each other via the prototype chain and access a property on B that does not exist on B but does exist on A. What will happen?

```
var soccer = {
  startMatch: () => console.log('Play ball')
}

soccer.hasOwnProperty("startMatch"); // true
```

Although the object `soccer` doesn't have the property `hasOwnProperty()`, we are able to call on `soccer` because the the delegation (prototype chain) invokes `Object.prototype.toString()`.


#### Object linkage

To create a linkage from objects that you created yourself, you can use the `Object.create(...)` property. 

