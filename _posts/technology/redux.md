---
title: 'Redux'
date: '2020-07-12'
snippet: 'Redux is a state management library that makes creating complex applications easier. It is not a required library for a React application and not explicitly designed to work with React. It should be used as a supplement to help you manage state in your application.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
hidden: 'true'
---

## Redux?

"Redux is a predictable state container for JS apps." - Redux Documentation

In Redux, the state of your app is stored in an object tree called a store. The only way to change the state of this tree is by emitting an action. Once an action is emitted, the corresponding reducer will transform the state tree via pure reducers.

## Three Principles

1. Single Source of Truth: global state of application is stored in a single store.
2. State is read-only: the only way to change state is by emitting an action.
3. Changes are made with pure functions: reducers are pure functions that take previous state and an action and returns the next state.

Action Creator -> Action -> Dispatch -> Reducers -> State
