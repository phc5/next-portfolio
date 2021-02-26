---
title: 'YDKJS Get Started'
date: '2021-02-14'
snippet: 'Notes from YDKJS Get Started '
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
- Functional programming: organies code into functions (pure computations as opposed to procedures which may have side effects) and the adaptaions of those functions as values.

## Is JavaScript an interpreted (scripting) or compiled language?
Most people have the opinion that JS is an interpreted language rather than a compiled language. However, in interpreted languages, code is executed top-down without an initial pass through of the program; so if there was an error on line 10, you won't know until lines 1-9 are run. Compare this to a language like JS that has a processing step (called parsing) where an invalid command would be caught on line 10 during this parsing phase before any execution of code. JS source code is parsed before it is executed.

Let's look at an entire flow of a JS program from start to finish:
1. Developer writes JS
2. It gets transpiled by Babel and bundled up by Webpack
3. The JS engine parse the code to an AST
4. The engine pconvers AST to byte-code which is then refine and converted by the JIT compiler
5. The JS VM executes the program

It's safe to say, JS is a compiled language.

## Strict mode
Strict mode should be used as a guide to do things the best way so that the JS engine has the best chance of optimizing and efficiently running the code. Strict mode makes several changes:
1. Eliminates some JS silent erros by changing them to throw errors.
2. Fixes mistakes that make it difficult for JS engines to perform optimizatoins. 
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

## Each File is a Program 
In JS, each standalone file is its own separate program. However, many web applications these days use webpack to bundle multiple files into one and when this happens, JS treats this single combined file as one program.

## Declaring and Using Variables

`let` keyward allows a more limited access to the variable than `var` by using "block scoping" as opposed to function scoping.

`const` declared variables are not "unchangeable", they just can't be reassigned. Try not to use `const` with object values like arrays and objects because their values can be changed. 