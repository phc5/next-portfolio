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

By default variables are immutable, but you have the option to make them mutable. If you have an immutable variable `let x = 5;` and try to change it, Rust will throw a compile-time error because this situation can lead to bugs. In Rust, the compiler guarantees that when you state that a value won't change, it will not change.

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

### Functions

Functions are pervasive in Rust code. This means that you can define your functions before and after your `main()`. Rust doesn't care where you define your functions, as long as they are defined somewhere.

When it comes to function signatures, you must declare the type of each argument. Requiring these type annotations was a design choice by the Rust team. It also means that the compiler almost never needs define them in other places in your code to figure out what these arguments mean.

#### Statements vs Expressions

Statements are instructions that perform some action and do not return a value.

Expressions are instructions that evalute to a resulting value. Expressions do not end in a semicolon. If you add a semicolon to the end of an expression, you turn it into a statement, which will not return a value. See this example below:

```
fn main() {
  let x = 10;

  let y = {
    let x = 5;
    x + 3
  }
}
```

The `{}` denotes a block that is used to create new scopes: an expression. The above expression evaluates to 8 and gets bound to y.

#### Functions with Return Values

Functions can return values to the code that called them. To return a value from a function you have to declare their type after an arrow `->`. The return value in a function is either the final expression in the body of the function or where the `return` keyword is used.

### If Statements

If statements are some of the most basic building blocks of programming langauges. In Rust, the syntax is much like JavaScript:

```
fn main() {
  let x = 5;

  if x < 3 {
    println!("Less than 3");
  } else {
    println!("Greater than 3");
  }
}
```

There a few caveats coming from JavaScript. First, there are no parens around the condition that is evaluated in the if. Second, the condition in the if block must evaluate to a boolean, otherwise Rust will throw an error. Rust will not automatically coerce non-boolean values into a boolean unlike JavaScript.

### Loops

There are three kinds of loops in Rust: `loop`, `while`, and `for`.

- `loop` will loop through the block continously until we explicitly stop the program via the `break` keyword or manually in the terminal via `Ctrl + C`.
- `while` will loop through the block continously until the condition ceases to be true or you call `break`.
- `for` will loop through a collection.

```
fn main() {
  let a = [10,20,30,40,50]; // remember this is a fixed sized array and can't grow or shrink

  for element in a.iter() {
    println!("Value is {}", element);
  }
}
```

### Ownership

All programs have to manage the computer's memory. Some languages have automatic garbage collection while others give the developer the power to allocate and free memory as they see fit. Rust doesn't fit into either of these categories. In Rust, memory is managed through a system of ownership with a set of rules that are checked at compile time. With ownership comes a bit more complexity, but according to the docs, as you become more experienced, we'll be able to more easily develop safe and efficient code.

#### The Stack and Heap

An aside before going into ownership. The stack and heap are two parts of memory that are available for our code to use at runtime. In langauges like JavaScript, we didn't have to worry about the stack and heap but in a system programming language like Rust, we have to decide whether a value is on the stack or the heap.

The stack is fast because of the way it stores and accesses data. When adding data to the stack, you just push it to top of the stack and when accessing a value from the stack, you just pop it off from the top of the stack. Another property of the stack is its fixed size.

On the other hand, the heap is used for storing data with an unknown size at compile time or if its size might change. When you put data on the heap, you ask for the amount of space needed and the OS will find an empty spot in the heap that is big enough to store your data and returns a pointer to that location.

#### Ownership Rules

1. Each value in Rust has a variable that is called its owner.
2. There can only be one owner at a time.
3. When the owner goes out of scope, the value will be dropped.

```
{
  let s = String::from("hello");  // s is valid within this block
  // do something with s
}                                 // s is no longer valid (out of scope and garbage collected)
```

When a variable goes out of scope, Rust calls a function called `drop` automatically at the closing curly bracket.

```
{
  let s1 = String::from("hello");
  let s2 = s1;

  println!("{}, world!", s1);
}
```

The above line will cause an error: `use of moved value: s1`. This happens because Rust no longer considers `s1` to be valid. When we assign `s1` to `s2`, the String data is copied, meaning we copy the pointer, the length, and the capacity and not the data on the heap itself. Additionally, Rust also invalidates `s1` by doing what's called a `move`. Now when the variables are out of scope, Rust will free `s2` from memory and doesn't have to worry about `s1`.

```
{
  let x = 5;
  let y = x;

  println!("X = {}, Y = {}" x, y);
}
```

Now why does this work? The size is known at compile time and values with known sizes at compile time are stored on the stack. Some types that fall under this are:

- all integer types
- boolean
- floats
- characters
- tuples that strictly contain any of the types above

#### Ownership and Functions

The semantics for passing a value to a function are simliar to those for assigning a value to a variable. When you pass a variable to a function, the variable will move/copy just as assignment does. Return values also transfer ownership.

```
fn main() {
  let s = String::from("hello");  // s is in scope

  takes_ownership(s);             // s's value moves into this function
                                  // s is no longer valid in this scope

  let x = 5;                      // x is in scope

  makes_copy(x);                  // x's value moves into this function
                                  // x is still valid here

}                                 // x goes out of scope, then s

fn takes_ownership(some_string: String) {
  println!("{}", some_string);
}                                 // some_string goes out of scope and drop is called

fn makes_copy(some_integer: i32) {
  println!("{}", some_integer);
}                                 // some_integer goes out of scope
```

The ownership of a variable follows this pattern: assigning a value ot another variables moves it; when a variable that includes data on the heap goes out of scope, the value will be cleaned up by drop unless the data has been moved to be owned by another variable.

Ownership, borrowing, and slices ensure memory safety in Rust programs at compile time. Rust gives you control over your memory usage in the same way as other systems programming languages but the owner of data automatically cleans up that data when the owners goes out of scope.

#### References and Borrowing

The `&s1` syntax lets us create a reference that refers to the value of `s1` but does not own it. Likewise, the value it points to will not be dropped when the reference goes out of scope.

```
fn calculate_length(s: &String) -> usize {  // s is a reference to some String
  s.len()
}                                           // s goes out of scope, but doesn't drop the String it
                                            // references since it does own it.

```

The example above is called borrowing: references as function parameters.

Borrowed and referenced values are immutable unless you make them mutable references via `&mut s1`. Once caveat is that you can only have one mutable reference in a particular scope. This was a design choice by Rust to prevent data races at compile time. A data race is when two or more pointers try to access the same data at the same time, at least one of the pointers is writing to the data, and/or there is not mechanism used to synchronize access to the data. You can have multiple mutable references in a function by creating a new scope within that function like this:

```
fn some_function() {
  let mut s = String::from("testing");
  {
    let s1 = &mut s;
  }

  let s2 = &mut s;
}
```

Another big caveat is you can't have a mutable reference in the same scope as immutabale references. This is another design choice by Rust to make sure the data is not changed for those reading from immutable references.

```
fn some_function() {
  let mut s = String::from('testing');
  let s1 = &s;      // OK
  let s2 = &s;      // OK
  let s3 = &mut s;  // NOT OK
}

```

### Structs

A struct is a custom data type that lets you name and package together multiple related values that make a meaningful group.

```
struct Note {
  id: String,
  title: String,
  body: String,
  user_id: u32,
}

let note1 =  Note {
  id: 1,
  title: String::from("Test Note"),
  body: String::from("This is a test note.),
  user_id: 123,
}

let mut note2 = Note {
  id: 2,
  title: String::from("Test Note 2"),
  body: String::from("This is a test note 2."),
  user_id: note1.user_id, // we can also just spread note1 here(...note1) to get the remaining fields not explicitly set
}

note2.title = String::from("Edited Note");
```

If the struct is mutable, then we can change a value by using dot notation and assign a value to a particular field. The entire struct has to be mutable; Rust doesn't allow only certain fields to be mutable.

You can add methods to a struct. They are like functions but defined within the context of a struct. Their first parameter is always self, which is the instance of the struct the method is being called on.

```
struct Rectangle {
  width: u32,
  height: u32,
}

impl Rectangle {
  fn area(&self) -> u32 {
    self.width * self.height
  }

  fn square(size: u32) -> Rectangle {
    Rectangle {
      width: size,
      height: size,
    }
  }
}

fn main() {
  let rect1 = Rectangle {
    width: 15,
    height: 20,
  };

  let square1 = Rectangle::square(4);

  println!("{}", rect1.area());
}
```

The `area()` method is on the Rectangle struct, but we also defined another method called `square()`. This method is called an associated function because it is associated with the struct. Notice how it doesn't have an instance of the struct to work with in the parameter. Associated functions are usually used as constructors that will return a new instance of the struct.

### Enums

Enums allow you to define a type of enumerating its possible values. Enum values can only be one of the variants it describes. Here is an example using IP addresses which has two variants: IPv4 and IPv6.

```
enum IpAddr {
  V4(String),
  V6(String),
}

let home = IpAddr::V4(String::from("127.0.0.1"));

let loopback = IpAddr::V6(String::from("::1"));
```
