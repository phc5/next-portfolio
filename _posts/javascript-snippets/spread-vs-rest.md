---
title: 'Spread vs Rest Syntax'
date: '2021-03-08'
snippet: 'What is the difference between the spread and rest syntax? They look exactly the same (...) but they perform very different operations. Read more to find out!'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Javascript Snippets'
---

## Problem

The spread and rest syntax are denoted by three periods like this `...`. Although they look the same, they perform different operations.

## Spread

The spread syntax allows an iterable such as an array, string, or object to be expanded in a list of some kind such as the arguments list of a function. One thing that helps me remember what exactly the spread syntax does is that is spreads out the values; think of spreading out peanut butter on a piece of bread 🍞!

Here are some examples:

#### Array

```
function add(a, b, c) {
  return a + b + c;
}
const numbers = [10, 20, 30, 40, 50];

add(...numbers); // 60
```

In the above example, we declare a function `add()` that takes in three parameters. Then we declare a variables called `numbers` and initalize it to an array filled with five numbers. Lastly, we call the function `add()` with the `numbers` array spread inside the arguments list.

#### String

```
const phrase = "Spreading this string!"

const characters = [...phrase]; // ["S", "p", "r", "e", "a", "d", "i", "n", "g", " ", "t", "h", "i", "s", " ", "s", "t", "r", "i", "n", "g", "!"]
```

Here we declare a variable called `phrase` and initialize it to the string `"Spreading this string!"`. Then we declare a variable `characters` and initialize it to an array literal and spread the `phrase` variable inside. When we write `...phrase` inside the array literal, we are spreading the string inside the array and, as a result, we get each character from the `phrease` in the resulting `characters` array.

#### Object

```
const dog = { breed: 'Miniature Australian Shepherd', age: '3' };

const dogCopy = { ...dog, color: 'Blue Merle' }; // { breed: 'Miniature Australian Shepherd', age: '3', color: 'Blue Merle' }
```

In this example, we declare a variable `dog` and initialize it to the object with two key-value pairs. In the last line, we declare a variable `dogCopy` and set it equal to an object where we spread the `dog` variable and also set a `color` key with value `'Blue Merle'`. The `...dog` operation will expand the key-value pairs inside `dogCopy`.

## Rest

The rest syntax looks just like the spread syntax right? Although they look the same, they are quite different. While the spread syntax expands an array, string, or object, the rest syntax collapses all remaining arguments of a function into one array; the rest syntax must be the last parameter. This means that the rest syntax essentially allows a function to accept any number of arguments.

Here is an example:

```
function add(a, b, ...otherArgs) {
  const sumOfOtherArgs = otherArgs.reduce((acc, curr) => acc + curr, 0);

  return a + b + sumOfOtherArgs;
}

add(1,2,3,4,5,6,7,8,9,10) // 55
add(1,2) // 3
```

In this example, we are using the rest syntax as the last parameter to the function `add()`. The first call to `add()` adds numbers 3, 4, 5, 6, 7, 8, 9, and 10 and then adds 1 and 2 to them, resulting in 55. The second call to `add()` adds 1 and 2, resulting in 3.
