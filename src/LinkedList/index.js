/**
 * Linked list contains Head, tail and Lenght property
 * Lists const of nodes, and each node has a value and a pointer to another node or null
 * Array without elevators :)
 */

 class Node{
     constructor(val) {
         this.val = val;
         this.next = null;
     }
 }
 class singlyLinkedList{
     constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
     }
     /**
      * Accept value @param {*} val 
      * Create a new node Usng the value passed to he function
      * If there is no head property on the list, set  the head and the list to the newly created Node
      * Otherwise set the next property on the tail to be the new node and set the tail property list to be the newly created node
      * Incement the length by one
      */
     push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            console.log(this.tail)
        }
        this.length++;
        return this;
     }
 }

 var list = new singlyLinkedList();

 list.push("first")
 list.push("second")

 console.log(list)