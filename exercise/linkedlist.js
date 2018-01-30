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