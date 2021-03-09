---
title: 'Go for JS'
date: '2020-05-01'
snippet: 'Notes taken while I went through the Go docs for the first time and the Front End Masters course Go For JS. I also have some code samples where I practice writing Go!'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
---

## Table of Contents

## Go for JS

Go is an open source programming language that makes it easy to build simple, reliable, and efficient software. It is a statically typed, compiled programming language designed at Google. It is syntactically similar to C, but with built-in memory safety, garbage collection, structural typing and concurrency.

Features:

- lightweight type system
- concurrency
- automatic garbage collection
- strict dependencies
- convention

### Go vs JS

Go

- Strongly typed
- structs, pointers, methods, interfaces
  - define behavior and attributes
- errors are treated like values instead of exceptions, you need to capture errors and handle them
  - need to be explicit, handle errors and then handle if everything goes right
- multi-threaded
  - concurrency, goroutines, sync
- strongly opinionated
  - convention, built-in tooling, and linters

JS

- Dynamically typed
- ES6 classes
  - define behavior and attributes
- error handling is built in
- single-threaded
  - callbacks, async await
- not as opinionated

### Packages

Every Go program is made up of packages and starts at package `main`.

The environment in which these programs are executed is deterministic, so each time you run the example program rand.Intn will return the same number. A system is deterministic in which no randomness is involved in the development of future states of the system. A deterministic model will thus always produce the same output from a given starting condition or initial state.

When importing packages, you can import them separately, but it is good style to import them together like this:

```
import (
  "fmt"
  "math"
)
```

When you export names from packages, remember to capitalize the first letter. For example to access Pi in the `math` package, you have to access it like this `math.Pi`. This will not work `math.pi`. Lower case names will not be exported from the package and will not be accessible from outside the package.

### Named Return Values

Go's return values may be named. If so, they are treated as variables defined at the top of the function. And this is called a "naked" return. This should be used only in short functions because it affects readability in longer functions.

```
package main

import "fmt"

func split(num int) (x, y int) {
	x = num * 2 / 10
	y = num - x
	return
}

func main() {
	fmt.Println(split(5)) // 1, 4
}
```

### Short Variable Declarations

Inside a function, the := short assignment statement can be used in place of a var declaration with implicit type.
Outside a function, every statement begins with a keyword (var, func, etc...), so the := construct is not available.

### Looping

Go only has one looping construct, the `for` loop. Heres an example

```
package main

import "fmt"

func main() {
  var sum int
  for i := 0; i < 10; i++ {
    sum += i
  }

  fmt.Println(sum)
}
```

The init (i := 0) and post (i++) are optional.

For is Go's while statement

```
package main

import "fmt"

func main() {
  sum := 1
  for sum < 1000 {
    sum += sum
  }
}
```

### Scan

You can ask for user input via `fmt.Scan()`. Here's an example I made where the program asks the user for their name, hometown, age, and if they are a fan of the Lakers.

```
package main

import (
	"fmt"
	"strings"
)

func askConfirmation() string {
	var s string

	fmt.Printf(" (y/N): ")

	_, err := fmt.Scanln(&s)

	if err != nil {
		//panic
	}

	s = strings.TrimSpace(s)
	s = strings.ToLower(s)

	if s == "y" || s == "yes" {
		return "I am a Lakers fan."
	}
	return "I am not a Lakers fan."
}

func main() {
	var name, hometown, isLakersFan string
	var age int

	fmt.Println("What is your name?")
	fmt.Scan(&name)
	fmt.Println("What is your hometown?")
	fmt.Scan(&hometown)
	fmt.Println("How old are you?")
	fmt.Scan(&age)
	fmt.Print("Are you a Lakers fan?")
	isLakersFan = askConfirmation()

	fmt.Printf("Hi! My name is %s. My hometown is %s and I am %d years old. %s\n", name, hometown, int(age), isLakersFan)
}
```

### Defer

A defer statement defers the execution of a function until the surrounding function returns.

The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.

```
package main

import "fmt"

func main() {
  defer fmt.Println("world")

  fmt.Println("hello")
}

// hello
// world
```

You can stack defers in a function (call it multiple times). They are pushed onto a stack and returned in LIFO order.

### Pointers

Go has pointers which holds the memory address of a value.

```
var p *int

i := 42
p = &i          // point to i

fmt.Println(*p) // read i through pointer[]
*p = 21         // set i through pointer p
```

Pointer type definitions are indicated with a \* next to the type name

- indicate that the variable will point to a memory location.
- ex) `var namePointer *string`

Pointer variable values are visible with a \* next to the variable name

- ex) `var nameValue = *namePointer // this will give you an address like 0xc000010200`

To read through a variable to see the pointer address use a & next to the pointer variable name

- ex) `var nameAddress = &namePointer`

### Arrays

The type [n]T is an array of n values of type T.

Declare an array like this: `var a [10]int`, which declares a variable `a` as an array of ten integers. Notice that we preallocate the length of the array, which is part of its type. Arrays cannot be resized but there are ways Go provides to work with arrays.

### Slices

Arrays are fixed in length but slices are dynamically-sized, flexible view into the elements of an array. Slices are more common than arrays. Slices aren't a data structure perse. It doesn't store any data, it just describes a portion of an underlying array.

A slice is formed by speciying two indices, a low and high bound like this `a[low : high]`. This works like the `Array.slice()` in JavaScript where it takes elements from `low` up to and not including `high`. So `a[1:4]` will select elements at index 1 through 3.

If you chagne the elements of a slice, you also change the corresponding elements in the underlying array as well as other slices sharing the underlying array.

Range

- the range form of the for loop iterates over a slice or map.
- when ranging over a slice, two values are returned for each iteration: index and copy of element at that index

```
package main

import "fmt"

var a []int{1,2,3,4,5,6,7}

func main() {
  for i, v := range a {
    fmt.Printf("1*%d = %d\n", i, v)
  }
}
```

Another Slice example

```
package main

import "fmt"

var groceries = []string{"apple", "oranges", "beans", "potato"}

func addItem(newItems ...string) []string {
	foods := groceries
	for _, item := range newItems {
		foods = append(foods, item)
	}
	return foods
}

func main() {
	fmt.Println(addItem("OJ", "Milk", "Cheese", "Bunz"))
}
```

### Maps

A map maps keys to values. The zero value of a map is nil and a nil map has no keys and you can't add keys to a nil map.

```
package main

import "fmt"

type Vertex struct {
  Lat, Lng float64
}

func main() {
  m = make(map[string] Vertex)
  m["Testing"] = Vertex{ 523.234, 248.244 }

  fmt.Println(m["Testing"])
}
```

Insert or update an element in map `m` by: `m[key] = elem`
Get an element by: `elem = m[key]`
Delete an element by: `delete(m, key)`
Check if key exists: `elem, ok := m[key]`

```
Exercise: Maps
Implement WordCount. It should return a map of the counts of each “word” in the string s. The wc.Test function runs a test suite against the provided function and prints success or failure.

You might find strings.Fields helpful.

package main

import (
  "golang.org/x/tour/wc"
  "strings"
)

func WordCount(s string) map[string]int {
  //create a map
  var wordMap = make(map[string]int)

  //get slice of string split up by space using strings.Fields
  var slicedStrings = strings.Fields(s)

  //go through string and count up occurrences
  for _, word := range slicedStrings {
    wordMap[word]++
  }

  return wordMap
}

func main() {
  wc.Test(WordCount)
}
```

Another map example

```
func main() {
	pets := map[string]string{
		"fido": "dog",
		"kora": "dog",
		"bud":  "cat",
		"kiki": "bird",
	}

	if kora, exists := pets["kora"]; exists {
		fmt.Println(kora)
	} else {
		fmt.Println("Kora doesn't exist in this database...")
	}
}
```

Here you can see that in the if statement, we get the value of the key "kora" and an exists variable that tells us if that key exists in the map. This is handy to handle/throw an error if the key doesn't exist in the map!.

### Function Closures

A closure is a function that references variables from outside its body (from golang docs). The function may access and assign to the referenced variables; in this sense the function is bound to the variables.

```
Exercise: Fibonacci closure
Let's have some fun with functions.

Implement a fibonacci function that returns a function (a closure) that returns successive fibonacci numbers (0, 1, 1, 2, 3, 5, ...).

package main

import "fmt"

func fibonacci() func() int {
  x, y := 0, 1

  return func() (r int) {
    r = x
    x, y = y, x + y
    return
  }
}

func main() {
  f := fibonacci()
  for i := 0; i < 10; i++ {
    fmt.Println(f());
  }
}
```

### Methods

Go doesn't have classes but you can define methods on types.

A method is a function with a special receiver argument. The receiver appears in its own argument list between the func keyword and the method name.

Pointer Receivers

You can declare methods with pointer receivers. This means the receiver type has the literal syntax \*T for some type T. Methods with pointer receivers can modify the value to which the receiver points. Since methods often need to modify their receiver, pointer receivers are more common than value receivers.

```
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	v.Scale(10)
	fmt.Println(v.Abs())
}
```

The above code scales v.X and v.Y by 10 and returns the sqrt of x<sup>2</sup> + y<sup>2</sup> which will return 50.

But if you remove the pointer declaration on Scale to (v Vertex), you'll notice the result is 5. This is because it is operating on the copy of the oriignal Vertex values (3,4) and not (30,40). The Scale method must have a pointer receiver to change the Vertex value that was scaled up by 10.

### Interfaces

An interface is a list of methods that are going to describe behavior of particular types. If you think of structs as a set of properties that define a type, interfaces can be thought of as a set of methods that define a type. In other words, an interface contains a list of function signatures, describing the behavior of other types.

### Routes

When you write a Go webapp, you need to pick web middleware and a multiplexer to handle routing. To set up routes in Go, you can use the `net/http` package that comes standared with Go. There are other packagse that handle multiplexing in Go: the job of these packages is to match the incoming URL of each request against a list of patterns you described in your code.

In the `net/http` package, ServeMux is the HTTP request multiplexer that is used to handle the URL matching of each incoming request against your registered patterns and calls a handler that matches the pattern.

When you define a route using the `net/http` package, you define it like this:

```
package main

import (
  "fmt"
  "net/http"
)

func homeHandler(res http.ResponseWriter, req *http.Request) {
  fmt.Fprint(res, "This is home!")
}

func aboutHandler(res http.ResponseWriter, req *http.Request) {
  fmt.Fprint(res, "This is about!")
}

func main() {
  http.HandleFunc("/", homeHandler)
  http.HandleFunc("/about/", aboutHandler)

  log.Fatal(http.ListenAndServe(":3000", nil))
  fmt.Println("Listening on port 3000")
}
```

### Packages

You can create your own packages if you have functions that you want to reuse. All you have to do is create a separate file and name the function with a capital letter and comment it. For example:

```
// utils/add.go
package utils

import "fmt"

// This function adds the number it is passed and returns the sum
func Add(nums ...int) int {
  sum := 0

  for _, num := range nums {
    sum += num
  }

  return sum
}
```

### Testing

Go has a built-in library for testing called "testing". You can see below a contrived test for the Add util we created in the previous section.

```
// utils/add_test.go
package utils

import "testing"

func TestAdd(t *testing.T) {
  expected := 10
  actual := utils.Add(5,5)

  if actual != expected {
    t.Errorf("Actual average was incorrect...")
  }
}
```

### Error Handling

Errors indicate that something bad happened, but it might be possible to continue running the program.

log.Fatalln(err) logs your error somewhere.

Panics happen at run time and occurs when something happened that was fatal to the program and stops its execution.

Recover tells Go what to do when the applications panics.

- Recover must be paired with defer, which will fire even after a panic.

```
package main

import "fmt"

func recoverFromPanic() {
  if r := recover(); r != nil {
    fmt.Println("We're recovering...")
    fmt.Prinln(r)
  }
}

func panicExample(n int) {
  defer recoverFromPanic()
  for i < n {
    if i == 1 {
      panic("PANIC!!!!!")
    }
  }
}

func main() {
  panicExample(2)
}
```

### Concurrency

A Goroutine is a lightweight thread managed by the Go runtime that allows Go to asynchronously fire off a lot of different tasks in a streamlined way. To use goroutines, just place go in front of a function call. It will tell Go to spin up a new thread to do run that function.

### Final Thoughts

My first experience using Go was awesome. Because Go is strongly typed, I get immediate feedback if I'm doing something wrong and I can also find function signatures and definitions just by hovering over the variables. On top of that, I can also use `go doc` in the terminal to quickly look up documentation. I definitely have more to explore and am wondering how I can use Go in combination with React. I'm definitely looking forward to learning more about Go!
