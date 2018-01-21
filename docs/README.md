# Important Javascript Interview Questions and Concepts

# Important Links

- [Toptal 37 Javascript Interview Questions](https://www.toptal.com/javascript/interview-questions)
- [You Dont Know JS](https://github.com/getify/You-Dont-Know-JS)

## 1. What is the output of the following code. How can Closures help resolve this ?

```js
for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
```

> ANSWER

The code sample shown will not display the values `0, 1, 2, 3, and 4` as might be expected; rather, it will display `5, 5, 5, 5, and 5`.

The reason for this is that each function executed within the loop will be executed after the entire loop has completed and all will therefore reference the last value stored in i, which was 5.

`Closures` can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows:

```js
for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}
```
This will produce the presumably desired result of logging 0, 1, 2, 3, and 4 to the console.

In an `ES2015` context, you can simply use `let` instead of `var` in the original code:

```js
for (let i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
```

---

## 2. Example of a simple _constructor function_ in Javascript

> ANSWER

```js
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
```

---

## 3. Will this function execute ? Give Reasons...

```js
var foo = function baz(x){
    console.log('This will execute with the value: ', x);
};

foo(1); //works
baz(1); //This will throw an error :O
```

> ANSWER

Functions which are defined on the `Right Hand Side of the statement` cannot be invoked on the left side.

- baz(1); `will throw an error`

---

## 4. `var` keyword always attaches to the function scope. `let` keyword always attaches to the block scope.

the below function `var` keyword needs to be replaced with `let` else the value of `i` will spill outside of the `for` loop.

```js
function foo(){
    var bar = 'bar';
    for(var i=0;i<bar.length;i++){
        console.log('Character in BAR: ', bar[i]);
    }
    console.log('Variable i is: ', i);// This will show the value of i :(
}//end:foo

foo();
```

---

## 5. What is closure ?

> Closure is when a function remembers it's `lexical scope` even when the function is `executed outside that lexical scope.`

The following is an example of closure and is also known as `Module Pattern`.

```js
var foo = (function(){
    var obj = {bar:"bar"};
    return {
        bar:function(){
            console.log(obj.bar);
        }
    }
})();

foo.bar(); //bar
```

So, for a class module pattern, the following 2 points are required.

- It has to be wrapped inside a `IIFE`
- It should return one or more `inner functions`

---






