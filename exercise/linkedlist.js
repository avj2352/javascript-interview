function LinkedList(){
    this.head = null; //initially, our linkedlist will not have any nodes in it
    this.tail = null; //initially, our linkedlist will not have any nodes in it
}//end:LinkedList

function Node(value,next,prev){    
    this.value = value;
    this.next = next;
    this.prev = prev;
}//end:Node

var ll = new LinkedList();
console.log(ll);

var userList = new LinkedList();
console.log(userList);