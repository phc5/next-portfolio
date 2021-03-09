---
title: 'Computer Science Fundamentals: Data Structures'
date: '2020-04-22'
snippet: 'In this blog post, I go over Sets, Maps, Stacks, Queues, ArrayLists, Linked Lists, BSTs, Hash Maps, Bloom Filters, Trees, Graphs, Tries, Heap Sort, Radix Sort and more!'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
---

## Table of Contents

## Sets

Sets are a data structure that can store any number of unique values in any order you so wish. Set’s are different from arrays in the sense that they only allow non-repeated, unique values within them. A set allows allows at least four things: add, remove, contains, and toList. Set have no notion of order adn are also useful for deduplication since you can only add something to a set once.

## Maps

Maps hold key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. A Map object returns its element in insertion order so a for...of loop returns [key, value] for each iteration.

Both Maps and Objects let you set keys, retrieve values for those keys, delete keys, and detect wheteher something is stored at a key. Now you might be thinking what's the difference between Map and Object? Here they are:

Key Types

- Map: can be anything like primitive, functions, and objects.
- Objects: must String or Symbol

Key Order

- Map: keys are ordered by when it was inserted.
- Object: keys are not ordered

Size:

- Map: can get size by using size() property on Map.
- Object: number of items must be determined manually.

Iteration:

- Map: is an iterator so it can be directly iterated like in a for...of loop.
- Object: requires obtaining its keys (lik Object.keys) and iterating over them.

Performance:

- Map: performs better in scenarios involving frequent additions and removals of key-value pairs.
- Object: not optimized for frequent additions or removal of key-value paris.

## Stacks

A Stack is a DST that follows to Last-In First-Out (LIFO). In a stack, you can only push (add) or pop (remove). The last thing you pushed will be what pop removes from the stack and returns to you. Other methods on stacks include peek(), which gives you the top element on the stack without removing it and isEmpty(), which tells you if the stack is empty.

## Queues

A Queue is a DST that follows "First-In First-Out" (FIFO). Al stacks need to have the methods enqueue (add/push) and dequeue (remove/pop). Like stacks, they'll have peek() to see what the next element is to dequeue and isEmpty() to check if the queue is empty.

There are also priority queues where the elements are weighted and dequeued based on that weight. Items that have higher priority get dequeued first. This is especially useful in networking where some packets are more useful than others so you want to remove them from the queue as fast as possible.

## ArrayList

In some languages, arrays are automatically resizable meaning the array will grow as you append items. In other languages like Java, arrays are fixed length and the size is defined when you create the array. When you need an array-like structure with dynamic resizing, you would use an ArrayList.

An ArrayList resizes itself as needed while providing O(1) access. A typicall implmentation of an ArrayList will double its length when full, which takes O(n) time. Inserting n elements takes O(n) time while each insertion takes O(1) on average and at worst O(n).

## Linked List

LinkedList is made of a bunch of nodes that point to the next one in the list. Every node in a LinkedLists has two properties: a value and a pointer to the next node in the list. Adding and removing is fairly trivial in LinkedLists: you just have to point the pointers correctly. On the contrary, getting a value at an index is cumbersome: you have to loop through the nodes until you get to the right node.

And that's the tradeoff between LinkedList and ArrayList: LinkedList's adds and deletes are O(1) but the gets are O(n); ArrayList's adds and deletes are O(n) but the gets are O(1).

Applications: Least Recently Used Cache, Hash Tables often use linked lists to handle collisions.

```
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    let current = this.head;

    if (this.head) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
    this.length++;
  }

  pop() {
    let current = this.head;
    while (current.next !== null) {
      if (current.next.next === null) {
        this.tail = current.next;
        this.length--;
        current.next = null;
        return this.tail.value;
      } else {
        current = current.next;
      }
    }
  }

  get(index) {
    if (index < 0) {
      throw new RangeError('Index must be greater than 0');
    }

    let current = this.head;
    let i = 0;

    while (current !== null && i < index) {
      current = current.next;
      i++;
    }
    return current.value;
  }

  delete(index) {
    if (index < 0) {
      throw new RangeError('Index must be greater than 0');
    }

    if (index === 0) {
      const value = this.head.value;
      this.head = this.head.next;
      this.length--;
      return value;
    }

    let previous = null;
    let current = this.head;
    let i = 0;

    while (current !== null && i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    if (current !== null) {
      previous.next = current.next;
      this.length--;
      return current.value;
    }
  }
}
```

## Binary Search Trees

A node BST has zero, one, or two subtrees. Every element in the left subtree is lesser than the value of the parent node and every node in the right is greater than the parent node. An average case of O(log n) on gets, adds, and deletes, but they can have a worst case of O(n) if add something like a sorted list.

```
class Node {
  constructor(value=null, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    }
    else {
      let current = this.root;
      while(true) {
        if (current.value > value) {
          if (current.left) {
            current = current.left;
          }
          else {
            current.left = new Node(value);
            break;
          }
        }
        else {
          if (current.right) {
            current = current.right;
          }
          else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
    return this;
  }
}
```

## Hash Tables

Hash Tables are key value stores and we use them to implement maps and/or sets. We use the key itself to be the index of where to find it in memory. O(1) lookups, delets, and adds. You apply key on a hashing function (like MD5, SHA1, or one of your invention) which converts it to an addressable space.

There are a couple problems with hash tables:

- It is not useful for something with order because your addresses won't have any idea of order.
- You need a lot of memory space if you want to avoid collisions.
- Need a good hashing algorithm.
  - Needs to be idempotent. Given a certain input, it must always return the same output.
  - Needs to have a pretty good distribution of values otherwise you'll end up with a lot of collisions.
  - Needs to be performant.

## Bloom Filters

A bloom filter is a space-efficient probabilistic data structure that is used to test whether an element is a member of a set. False positive matches are possible, but false negatives are not – in other words, a query returns either "possibly in set" or "definitely not in set." An empty Bloom filter is a bit array of m bits, all set to 0 like this [0,0,0,0,0,0,0,0,0,0]. You also need k different hash functions defined, each of which maps or hashes some set element to one of the m array positions, generating a uniform random distribution.

To add an element, feed it to each of the k hash functions to get k array positions. Set the bits at all these positions to 1.

- For example if you had 5 hashing functions, you'd get 5 indexes to switch to 0. If the index is already switched to 1 then do nothing.

To query for an element (test whether it is in the set), feed it to each of the k hash functions to get k array positions.

- If any of the bits at these positions is 0, the element is definitely not in the set; if it were, then all the bits would have been set to 1 when it was inserted.
- If all are 1, then either the element is in the set, or the bits have by chance been set to 1 during the insertion of other elements, resulting in a false positive. This is the tradeoff you're going to have to accept if you use a bloom filter.

You also can't remove anything you add to a bloom filter because removing it would flip the bit in the indices which other results depend on.

The number of indices has to be larger (take a lot of memory) and not small like 10 in the example above because you can't expand a bloom filter.

Here are some real-world applications: [Wikipedia Bloom Filters](https://en.wikipedia.org/wiki/Bloom_filter#Examples)

```
const h1 = string => someHashFunction1(string);
const h2 = string => someHashFunction2(string);
const h3 = string => someHashFunction3(string);

class BloomFilter {
  _array = new Array(1000).fill(0);

  add (string) {
    this._array[h1(string)] = 1;
    this._array[h2(string)] = 1;
    this._array[h3(string)] = 1;
  }
  contains (string) {
    return !!(this._array[h1(string)] && this._array[h2(string)] && this._array[h3(string)])
  }
};
```

## Tree Traversals

Trees are an essential part of storing data; one of their benefits is that they are optimized to be searchable. One operation you sometimes have to make with a tree is to flatten it down. There are a couple ways to do this:

Depth-First Search

- Preorder: process the node your on, then process left, and then process the right.
  - Useful if you want to make a copy of the tree.
- Inorder: process the left, then the node, and then the right.
  - Useful if you want to flatten your tree.
- Postorder: process the left, then the right, and then the node.
  - Useful if you want to delete the tree.

```
const preorderTraverse = (node, array) => {
  if (!node) return array;
  array.push(node.value);
  preorderTraverse(node.left, array);
  preorderTraverse(node.right,array);
  return array;
}

const inorderTraverse = (node, array) => {
  if (!node) return array;
  inorderTraverse(node.left, array);
  array.push(node.value);
  inorderTraverse(node.right,array);
  return array;
};

const postorderTraverse = (node, array) => {
  if (!node) return array;
  postorderTraverse(node.left, array);
  postorderTraverse(node.right,array);
  array.push(node.value);
  return array;
};
```

Breadth-First Search

Unlike DFS where we recursively process sub trees, BFS starts at the root and makes its way down the tree by layer. To implement this, we need to use a queue. Enqueue the root node, shift the root node, push the root value to your array, check if you have a left and/or right and push to array, respectively and then continue down the tree going left to right.

```
const breadthFirstTraverse = (queue, array) => {
  if (!queue.length) return array;

  let node = queue.shift();
  array.push(node.value);
  node.left && queue.push(node.left);
  node.right && queue.push(node.right);
  return breadthFirstTraverse(queue, array)
}
```

## Pathfinding

Djikstra's Algorithm

- Create a distance collection and set all vertices distances as infinity except the source node.
- Enqueue the source node in a min-priority queue with priority 0 as the distance is 0.
- Start a loop till the priority queue is empty and dequeue the node with the minimum distance from it.
- Update the distances of the connected nodes to the popped node if "current node distance + edge weight < next node distance", then push the node with the new distance to the queue.
- Continue till the priority queue is empty.

## Graphs

A tree is actually a type of graph, but not all graphs are trees. The difference between them is that a tree is a connected graph with no cycles. While graphs are simply a group of nodes that are connected by edges.

There are two primary ways of representing a graph:

Adjacency List

- Every node stores a list of adjacent connected vertices. In the below example, node 0 is connected to 1, node 1 is connected to 2, node 2 is connected to 0 and 3, etc... if this was a bidirectional graph, then the an edge would be stored twice so 0 <-> 1 would be [[1], [0,2],...] from extending our example below.
- ex: [[1],[2],[0,3],[2],[6],[4],[5]]

Adjacency Matrix

- is an NxN boolean matrix where N is the number of nodes. The value at (x,y) is usually a boolean like 0 and 1 (0 indiciating there is no edge between the coordinates and 1 indicating there is an edge at the coordinates).

The same search algorithms can be used on these two graphs but the main difference is that in the adjacency list you will have all the neighbors of a node while in an adjacency matrix, you will have to iterate through most if not all nodes to get neighbors. You can optimze by finding neighbors for both origin and end.

```
/*
 * inputs:
 * myId                - number    - the id of the user who is the root node
 * getUser             - function - a function that returns a user's object given an ID
 * degreesOfSeparation - number   - how many degrees of separation away to look on the graph
 *
 * users follow the pattern of {"id":1,"name":"test name","company":"Random","title":"UI Engineer","connections":[525,22,134]}
 */
const findMostCommonTitle = (myId, getUser, degreesOfSeparation) => {
  let queue = [myId];
  const seen = new Set();
  const jobs = {};

  for (let i = 0; i <= degreesOfSeparation; i++) {
    queue = queue
      .filter((id) => !seen.has(id))
      .map(getUser)
      .map(user => {
        jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
        seen.add(user.id)
        return user;
      })
      .map((user) => user.connections)
      .reduce((acc, users) => acc.concat(users), [])
  }
  return Object.entries(jobs).sort((a,b) => b[1]-a[1])[0][0];
}
```

## Tries (sounds like Trees and is a Tree)

A Trie is a tree that is optimzied for prefix searching. A trie starts with a root node that doesn't represent anything such as an empty string. From the root node are child nodes that represent one letter, the first letter of all the words added to the data structure. Each of those letter-nodes will have children nodes for all the second letters of the words that are represented in the data structure. This keeps going until you have your words fully branched out on the trie.

What's great about this is that if someone is starts typing "L", you can provide suggestions on what that word might be like "Los Angeles". If they start typing "La", you can suggest words that start with "La". To do this you do a a depth-first traversal starting from "A".

## Searching for Elements in an Array

```
function linearSearch(id, array) {
  // code goes here
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i].id === id) {
      return array[i]
    }
  }
  return false;
}

function binarySearch(id, array) {
  // code goes here
  let min = 0;
  let max = array.length - 1;
  let index;
  let element;

  while ( min <= max) {
    index = Math.floor((min + max) / 2);
    element = array[index];

    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }

  }

  return false;
}
```
