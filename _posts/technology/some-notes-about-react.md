---
title: 'Some Notes About React'
date: '2020-04-23'
snippet: 'In this blog post, I talk about some of the React internals and functionalities that may not be so obvious to React developers.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
hidden: 'true'
---

React is a JavaScript library for building user interfaces.

## Babel

Babel takes the code you wrote in whatever version of JavaScript and transpiles it down to JavaScript that browsers can parse, compile, and execute. Another thing Babel can do is transiple JSX into JavaScript code. In a React app, when you have JSX, Babel takes that and converts it into React.CreateElement() by the use of a preset: @babel/preset-react.

## Trees

React is all about JavaScript and trees. Take for example this simple React component:

```
const MyComponent = () => (
  <div>
    <p>Hello World!</p>
  </div>
)
```

Babel will take this JSX and convert it into this:

```
const MyComponent = () => (
  React.createElement('div', null,
    React.createElement('p', null, "Hello World!")
  )
)
```

React.createElement(type, [props], [...children])

- type: can either be a tag name, a React component type, or a React fragment.
- props: stands for properties, are immutable, and are used for passing data from one component to another in a uni-directional flow.
- children: the elements that this React Element wraps around.

```
const element = {
  type: 'h1',
  props: {
    children: 'Hello, World!'
  }
};
```

React reads these objects and uses them to constrct the DOM and keep it up to date via React DOM.

## A note about React.createElement()

If you Look at the source code for [ReactElement](https://github.com/facebook/react/blob/master/packages/react/src/ReactElement.js#L146), it is simply just a JavaScript object that is frozen via Object.freeze(). Object.freeze() locks the object in a way so that you can't extend it and change it: this is why props is also immutable.

## Where Do Trees Come Into Play in React?

If you look into the React source code, you won't find anything related to Document, the DOM, or the browser. React is just a library for creating dynamic trees: the virtual DOM.

There are two different cycles in React:

Initial Render

- Call render() to build tree
- Cache as current tree (Virtual DOM)
- Render DOM

Updates

Only state changes and forceUpdate() causes React to rerender.

- Call render() to build future tree
- Compare each element in future tree ot current tree from Initial Render
- Change DOM where needed
- Save future tree as current tree

As React is going through the updates phase, everytime React notices something has changed, it makes the change immediately rather than compiling a list of changes and doing it all at once.

## What is Virtual DOM?

The Virtual DOM is a programming concept where a "virtual" representation of a UI is kept in memory and synced with the real DOM through the library ReactDOM. The process of keeping the virtual DOM in sync with the browser's DOM is called reconciliation.

The Virtual DOM and its features enables the delcarative nature of React: you tell React state you want the UI to be in and React makes sure the DOM matches the state. The great thing about the Virtual DOM is that it allows React to do its calculations within this "virtual" world and skip "real" DOM operations, which are often slow and browser-specific.
