---
title: 'Rust Lang'
date: '2020-05-16'
snippet: 'In this blog post, I talk about Rust and my learnings from The Rust Programming Language book.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
---

Rust is a language that empowers developers to build reliable and efficient software. It is performant, reliable, and developer-friendly. You can create command line tools, web apps, servers, and embedded systems.

## Variables

By default variables are immutable, but you the have option to make them mutable. If you have an immutable variable `let x = 5;` and try to change it, Rust will throw a compile-time error because this situation can lead to bugs. In Rust, the compiler guarantees that when you state that a value won't change, it will not change.

If you do want to make your variables mutable, you can just add the `mut` keyword in front of the variable name like this: `let mut x = 5;`. Later down in your code, you can mutate this variable like this `x = 10;`.

### Shadowing

You can declare a new variable with the same name as a previous variable: this new variable will shadow the previous variable. This is unlike JavaScript where once you declare a variable, you can declare it again. Here is an example of shadowing:

```
fn main() {
  let x = 5;
  let x = x * 2;
  let x = x / 2;

  println!("The value of x is {}", x); // The value of x is 5.
}
```

Shadowing is different than the `mut` keyword because if you try to shadow without the `let` keyword, you will get a compile-time error. By using `let` we are creating a new variable again and therefore can also change the type of the value while using the same variable name.

```
fn main() {
  let x = "This is a string"; // This is a string
  let x = x.len();            // This is a usize
}
```

Shadowing is very useful for developers since we don't have to create new variables and new names like `strLength`. We can simply reuse the variable. If you had a `mut` in front of the variable name, this would throw a compile-time error since we are not allowed to change a variable's type when mutating.

### Data Types

Rust is a statically typed language, which means it must know the types of all variables at compile time. The compiler can infer what type we want based on the values and how we use it. But in cases where many types are possible, we must add a type annotation so that the compiler knows for sure what type the variable is.

```
let guess: u32 = "42".parse().expect("Not a number!");
```

Rust has a number of different data types that can be split up into two subsets: Scalar and Compound.

#### Scalar

A scalar represents a single value. Rust has four scalar types: integers, floats, booleans, and characters.

Integers are numbers without the fractional component. They can be either signed or unsigned and have a few variants:

| Length | Signed | Unsigned |
| ------ | ------ | -------- |
| 8-bit  | i8     | u8       |
| 16-bit | i16    | u16      |
| 32-bit | i32    | u32      |
| 64-bit | i64    | u64      |
| arch   | isize  | usize    |

How do you know which one to use? If you're not sure which variant to use, the defaults Rust sets are generally good choices. For example, for integer types, Rust defaults them to i32. Use isize or usize when indexing some sort of collection.

Floats have two variants: `f32` and `f64`. The default is `f64`.

Booleans can only have two possible values: `true` or `false`. You can specify a boolean using the `bool` keyword.

Characters are Rust's most primitive alphabetic type. You initialize a character via single-quotes as a opposed to double-quotes which is reserved for Strings. Rust's `char` type represents a Unicode Scalar Value which encomposses a lot more than just ASCII.

#### Compound Types

Compound types are multiple values of other types into one type. Rust has two compound types: tuples and arrays.

A tuple is a general way of groupign together various types into one group. You can create a tuple by a comman-separated list inside of parentheses.

```
  let tup: (i32, f64, i8) = (500, 6.4, 1);
```

There are a couple ways to access tuples:

```
  let tup: (i32, f64, i8) = (500, 6.4, 1);

  let (x, y, _) = tup;

  let one = tup.2;

  println!("These are the values in the tuple {}, {}, and {}", x, y, one);
```

This example is contrived but notice the underscore. I tried to destructure the first two elements, but the compiler threw an error telling me it `expected a tuple with 3 elements, found one with 2 elements`. So if you are not using an element, you can denote it via an underscore.

An array is another way to store a collection of values, but unlike tuples, elements in an array must be the same type. Arrays in Rust are different from arrays in JavaScript because Rust arrays are defined with a fixed length: once defined they can't grow or shrink in size. Rust has a Vector type which behaves more like JavaScript arrays in that it is allowed to grow and shrink in size.

The great thing about arrays is that it has a fixed length, so if you try to access an index that is out of bounds, Rust will panic and throw a runtime error. Notice this is not a compilation error. This is what is so great about Rust: many low-level languages don't throw runtime errors when an out-of-bounds index is accessed. Rust protects the developer from making these kinds of mistakes by exiting the program rather than allowing the invalid memory access.
