---
title: 'Computer Science Fundamentals: Sorting'
date: '2020-04-21'
snippet: 'In this blog post I go over Big O, Recursion, and various sorting algorithms such as Bubble Sort, Insertion Sort, MergeSort, and QuickSort.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
---

## Big O

Big O is the way we analyze how efficient algorithms or code is. Example `4x^2 + x + 1`. If `x = 5`, the first number would be 100, second number 25, and third 1 for a total of 126. But if you plugged in a large number like 1,000,000, the first number would be 4e+12, second number 1,000,000, and the third 1. A huge difference. In the second example, we don't care too much about the 2nd and 3rd numbers since the first number is the bulk of the result so we ignore the little parts and concentrate on the big parts.

## Recursion

Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. Or, it is a function that calls itself and maintains state throughout its execution.

When creating recursive functions, always start with the base case, otherwise you'll end up with a stack overflow.

Fibonacci using recursion

```
  function fibonacci(n) {
    if (n <=2) {
      return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
  }
```

Factorial using recursion

```
  function factorial(n) {
    if (n < 2) {
      return 1;
    }

    return n * fibonacci(n-1);
  }
```

Both these problems can be improved using memoization. Memoization is an optimization technique where you cache the results of expensive function calls and return the cached result when the same inputs occur again. Here is an example of one:

```
function memoize(callback) {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const newValue = callback.apply(null, args);
    cache[args] = newValue;
    return newValue;
  }
}
```

## Bubble Sort

Compare two values at a time and swap them if they are out of order.

```
function bubbleSort (nums) {
  do {
    var swapped = false;
     for (let i = 0; i < nums.length; i++) {
       if (nums[i] > nums[i+1]) {
         let temp = nums[i];
         nums[i] = nums[i+1];
         nums[i+1] = temp;
         swapped = true;
       }
     }
  } while (swapped)
}
```

Average and Worst case O(n²). Memory O(1).

## Insertion Sort

Start at the beginning of the list and assume we have a sorted list of length 1 where the first element is the only sorted element. Then grab the second element, and insert it into the correct spot in our sorted list, either the 0 index or the 1 index, depending if it's smaller or larger than our first element. We now have a sorted list of length 2. We then continue on down the original list, inserting elements in our sorted list.

The average and worst case is O(n²). Memory is O(1).

```
function insertionSort (nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j= 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
}
```

Let's talk about slice and splice...

### Array.prototype.slice(start, until)

Slice returns a shallow copy of a portion of an array into a new array object selected from start to until where start and until represent the index of items in that array.

- slice() will not include the value at the 2nd paramater.
  - [1,2,3,4,5].slice(0,3) will return [1,2,3]. (It will not include the value at index 3, which is 4).
- A negative index can be used, indicating an offset from the end of the sequence.
  - [1,2,3,4,5].slice(-1) will return [5].
  - [1,2,3,4,5].slice(-2) will return [4,5].
  - [1,2,3,4,5].slice(1, -2) will return [2,3]

### Array.prototype.splice(start, deleteCount, ...[itemsToAdd])

Splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The return value of splice is an array containg the deleted elements.

- [1,2,3,4,5].splice(1) returns [2,3,4,5] since these were the items removed. The original array will be [1].
- [1,2,3,4,5].splice(1, 2) returns [2,3]. The original array will be [1,4,5].
- [1,2,3,4,5].splice(1, 0, 9) returns [] since no items were removed. The original array will be [1,9,2,3,4,5].
- [1,2,3,4,5].splice(0, 0, 1, 2, 3) returns [] since no items were removed. The original array will be [1,2,3,1,2,3,4,5].

## Merge Sort

Merge sort: breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.

Average and worst case O(n log n). Memory is O(n).

Pseudocode:

- Create function called mergeSort that takes in array.

  - if array length < 2 return array;
  - create variable for middle index of array
  - create variable for items on the left of middle index
  - create variable for items on the right of middle index
  - recursively call merge function on left and right items

- Create function called merge that takes in left and right
  - create variable for sorted array
  - while left.length > 0 and right.length > 0
    - if left[0] < right[0] shift and push left[0] to sorted
    - else shift and push right[0]
  - return sorted concated with left and right (since the while loop can break if uneven lengths);

Code:

```
function mergeSort(array) {
  const arrayLength = array.length;
  if (arrayLength < 2) {
    return array;
  }

  const middle = Math.floor(arrayLength / 2);
  const left = mergeSort(array.slice(0,middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let sorted = [];

  while (left.length > 0 && right.length > 0) {
    sorted.push(left[0]<right[0]?left.shift():right.shift());
  }

  return sorted.concat(left, right);
}
```

## Quick Sort

Quick Sort: take the last element in the list and call that the pivot. Everything that's smaller than the pivot gets put into a "left" list and everything that's greater gets put in a "right" list. You then call quick sort on the left and and on the right list. After those two sorts come back, you concatenate the sorted left list, the pivot, and then the right list, in this order. The base case is when you have a list of length < 2, where you just return the input list.

Quick Sort performs poorly if you pass it a sorted list since the pivot will always be the biggest number and the left array will contain the rest of the numbers. You can optimize by compare begnining, middle, and end pivots or some other type of variation.

Average case O(n log n) and worst case O(n²). Memory O(log n).

```
function quickSort(array) {
  if (array.length < 2) return array;
  const pivot = array[array.length - 1];
  let left = [], right = [];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  const sortedLeft= quickSort(left);
  const sortedRight = quickSort(right);

  return sortedLeft.concat(pivot, sortedRight);
}
```

## Final Thoughts

There are more sorting algorithms that exist other than bubble sort, insertion sort, merge sort, and quick sort that I didn't get to cover. I'll hopefully have some time in the coming days to go over and learn them. For now, in my next blog post, I'll delve into some common data structures.
