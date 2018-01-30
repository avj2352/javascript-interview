# Important Javascript Interview Questions and Concepts

# Important Links

- [Toptal 37 Javascript Interview Questions](https://www.toptal.com/javascript/interview-questions)
- [ES6 Tips and Tricks](https://medium.freecodecamp.org/make-your-code-cleaner-shorter-and-easier-to-read-es6-tips-and-tricks-afd4ce25977c)
- [You Dont Know JS](https://github.com/getify/You-Dont-Know-JS)
- [Practice Code for Geeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
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

## 6. How does `Prototype`, `__proto__` work with the constructor functions `new` and `this`.

- If we want each instance of a constructor function, to have it's own `properties` and `methods`, we use the `new` and the `this` keyword.
- If we want every isntance of a constructor function to share a common method, like (`static` methods in other prgm languages), we use the `prototype` method.

```js
// instances of User type will have THEIR OWN COPIES of firstName and lastName
function User(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
var pramod = new User('pramod','jingade'); //Now pramod has its OWN COPY of firstName and lastName

User.prototype.emailDomain = '@gmail.com'; // This will be stored inside the __proto__ (a.k.a dunder proto)
User.prototype.getEmailAddress = function(){ // This will be stores inside the __proto__
    return `${this.firstName}.${this.lastName}@${this.emailDomain}`; //NOTE: prototype methods/ppties can be also accessed as this
}

pramod.getEmailAddress(); //this will return pramod.jingade@gmail.com
```
---

# DataStructures & Algorithms

# 1. LinkedList (Singly & Doubly Linked-List)

## Advantages of LinkedList

### Pros
- Dynamic Size
- Ease of Insertion/Deletion

### Cons
- Random access is not allowed. We have to always iterate through the first element to get to the next. `Binary Search is not possible with LinkedLists`
- Extra memory is required for the pointer for each element in the LinkedList.

| LinkedList | Arrays |
|:----------|--------:|
| LinkedList provide the advantage of `Dynamic Size` | Arrays have to be always fixed.|
| Insertion and Deletion in a LinkedList is `very easy` | Insertion and Deletion in an Array consumes memory |
| Random access is not `allowed` | Random access is `allowed` |      

Think of a LinkedList as a `whatsapp group`, All participants _(`nodes`)_ are physically in different geographic locations even though they are `connected` through the `whatsapp group` _(`linkedlist`)_. Each group has an `administrator` _(`head/tail`)_ for adding and removing the participant _(`node`)_

## LinkedList Properties
- No `constructor` arguments _()_
- `this.head`: _(null object)_
- `this.tail`: _(null object)_

## Node in LinkedList Properties
- Three arguments in `constructor` _(value,next,prev)_
- `this.value`: value
- `this.next`: next
- `this.prev`: prev

```js
function LinkedList(){
    this.head = null; //initially, our linkedlist will not have any nodes in it
    this.tail = null; //initially, our linkedlist will not have any nodes in it
}//end:LinkedList

function Node(value,next,prev){    
    this.value = value;
    this.next = next;
    this.prev = prev;
}//end:Node

LinkedList.prototype.addToHead =function(value){
    //Create a New Node with existing head tail properties and a new value
    let newNode = new Node(value,this.head,null);
    //Check if the existing head is null or not
    if(this.head)this.head.prev = newNode; // if head is NOT empty, then its previous property should be the newNode
    else this.tail = newNode; // If head is empty then the tail should be the newNode also
    this.head = newNode; // the head should be the newNode also
};//end:addToHead

LinkedList.prototype.addToTail = function(value){
    let newNode = new Node(value,null,this.tail);
    if(this.tail)this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
};//end:addToTail

LinkedList.prototype.removeHead = function(value){
    if(!this.head) return null ; //First Step : Check if the LinkedList is empty, if yes-exit
    //From here on, we are working with a condition that the linkedlist is not empty.
    //Second step: Get access to the current value in the head
    var val = this.head.value; //Now that we have the value, we can re-route the head.
    this.head = this.head.next; //New head node
    //Third step: The next node could contain a value, or it could be empty, if LinkedList has only one value
    if(this.head) this.head.prev = null; //If linkedList is having more than one value
    else this.tail = null; //If LinkedList has only one value, then we need to empty the List, so de-reference tail also
    return value;
};//end:removeHead

LinkedList.prototype.search = function(searchValue){
    //First Step: we will start on one node, then move on - so we need a variable
    var currNode = this.head;    
    //Second Step: Keep checking some condition till currNode is not empty.
    while(currNode){
        if(currNode.value === searchValue) return currNode.value
        currNode = currNode.next;
    }//end:while    
    return null;
};//end:search

LinkedList.prototype.indexOf = function(searchValue){
    var result = []; // This array will hold the list of positions where the value is found
    var indexCounter = 0; //Use the indexCounter to loop through the list
    var currNode = this.head;
    while(currNode){
        if(currNode.value === searchValue) result.push(indexCounter);
        if(currNode === this.tail) return result;
        currNode = currNode.next;
        indexCounter++
    }
};//end:indexOf


//TESTING PURPOSES ONLY
var userList = new LinkedList();
userList.addToHead(10); // this is index 2
userList.addToHead(20); // this is index 1
userList.addToHead(30); // this is index 0
userList.addToTail(10); // this is index 3

console.log('User List is: ', userList);

var indexOfList = userList.indexOf(10);
console.log('Result place of value is: ', indexOfList);
```






