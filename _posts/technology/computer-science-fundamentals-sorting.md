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

Space Complexity: How much memory is used?
Time Complexity: How many primitive operations are executed?

...with respect to input size and assuming worst case scenario.

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

## Sorting Types

Native Sorts: keep looping and comparing values until that list is sorted.

- Bubble Sort
- Insertion Sort
- Selection Sort

Divide and Conquer Sorts: recursively divide lists and sort smaller parts of list under entire list is sorted.

- Mergesort
- Quicksort

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

## Heap Sort

A heap is an array that represents a tree data structure and has to be sorted in a way to represent that tree. Priority queues are often represented as heaps and often those they are used interchangeably...

Binary heaps can be translated into a binary tree but they have some differences:

- A binary heap is an array, whlie a BST is made up of Node objects, usually.
- BSTs have a strict order where everything on the left of the parent is smaller and everything on the right is larger. Binary heaps dont follow this, the only guarantee is that the parent is greater than its children.
- You can do an in-order traversal of a BST to get a sorted list but not for a binary heap.
- A binary heap is a complete binary tree which means all children of each node are as full as possible, where the left side gets filled first.

To represent a binary tree as an array, you start at the root -> index 0. Then the left child is at 2n + 1 and the right is 2n + 2, where n is the index of the parent node.

There are two kinds of binary heaps: max and min heaps. This is why priority queues are usually binary heaps: you can get the larget number in a max heap pretty easily. Heapsort works this way: you make a priority queue and remove one item at a time and stick it at the end.

Heapsort works like this:

- Make the array a max heap.
- At this point, the largest item is stored at the root of the heap.
- Replace it with the last item of the heap followed by reducing the size of heap by 1.
- Heapify the root of tree (the root shoud have a new value from above step).
- Repeat until heap size is > 0.

```
//initial array
[5, 3, 2, 10, 1, 9, 8, 6, 4, 7]

//heapify() first call
start at midpoint, index 5 value 9.
left child (2n+1) index 11 and right child (2n+2) index 12 are out of bounds.
so move on.

//heapify() second call
go down one index to index 4 value 1.
left child is index 9 value 7, right chlid is index 10 out of bounds
swap index 4 and index 9
[5, 3, 2, 10, 7, 9, 8, 6, 4, 1]
call heapify() on index 9, whch does nothing

...

[10, 7, 9, 6, 5, 2, 8, 3, 4, 1]
you'll eventually have a heap like aboveand can start dequeuing your elements and sort your array.

Swap 10 and 1
[1, 7, 9, 6, 5, 2, 8, 3, 4, 10]
call heapify on index 0
left child is index 1 value 7, right child is index 2 value 9
swap with index 2
[9, 7, 1, 6, 5, 2, 8, 3, 4, 10]

call heapify on index 2
left child is index 5 value 2, right child is index 6 value 8
8 is larger, swap with index 2
[9, 7, 8, 6, 5, 2, 1, 3, 4, 10]
call heapifiy on index 6, does nothing since children are out of bounds

Swap 9 and 4 (beginning and length - 2 since last element is already largest)
[4, 7, 8, 6, 5, 2, 1, 3, 9, 10]
call heapify on index 0
Continue swapping the first element (the root) and last element of the heap
and then call heapify on element 0
After all these iterations, the array will be sorted
```

Implementation:

```
const heapSort = array => {
  array = createMaxHeap(array);
  let temp;
  let heapSize = array.length;

  for (let i = array.length - 1; i > 0; i--) {
    temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapSize--;
    heapify(array, 0, heapSize);
  }
  return array;
};

const createMaxHeap = array => {
  for (let i = Math.floor(array.length /2); i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};

const heapify = (array, index, heapSize) => {
  const left = 2*index + 1;
  const right= 2*index + 2;
  let largestValueIndex = index;

  if (heapSize > left && array[largestValueIndex] < array[left]) {
    largestValueIndex = left;
  }

  if (heapSize > right && array[largestValueIndex] < array[right]) {
    largestValueIndex = right;
  }

  if (largestValueIndex !== index) {
    const temp = array[index];
    array[index] = array[largestValueIndex];
    array[largestValueIndex] = temp;
    heapify(array, largestValueIndex, heapSize);
  }

};
```

## Radix Sort

Radix Sort is a sorting algorithm that takes advantage of the fact that integers have a finite number of bits. In radix sort, we iterate through each digit of the number, grouping numbers by each digit. For example if we have an array of integers, we might first sort them by the first digit so that all numbers that start with 1s are grouped together. Then we sort each of these groupings by the next digit. Unlike the other sorting algorithms that do comparisons and perform at best O(n log(n)), radix sort has a runtime of O(kn), where n is the number of items in the array and k is the number of passes in the sorting algorithm.

```
unction getDigit(number, place, longestNumber) {
  const string = number.toString();
  const size = string.length;
  const mod = longestNumber - size;

  return string[place-mod] || 0;
}

function findLongestNumber (array) {
  let longest = 0;

  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}

function radixSort(array) {
  const longestNumber = findLongestNumber(array);
  const buckets = Array.from({length: 10}, () => []);

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift();
      buckets[getDigit(current, i, longestNumber)].push(current);
    }
    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }


  return array
}
```

## Greedy Algorithms

Greedy ALgorithms always make the locally optimal choice without considering the big picture. Greedy algorithms are not always optimal. However, there is a time and a place for greedy algorithms: when your data set is too big that you can't think of all the different scenarios because its just computationally too much, so its better to have a solution rather than no solution.

## Dynamic Programming

Cache values to avoid repeated calculations. Dynamic programming has overlapping subproblems and tends to be recursive.

Approaches:

- Top Down (recursive)
- Bottom Up (iterative)

## Final Thoughts

There are more sorting algorithms that exist other than bubble sort, insertion sort, merge sort, and quick sort that I didn't get to cover. I'll hopefully have some time in the coming days to go over and learn them. For now, in my next blog post, I'll delve into some common data structures.
