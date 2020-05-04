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
     traverse(){
         var current = this.head;
         while(current){
             console.log(current.val);
             current = current.next
         }
     }
     /**
      * Popping Pseudocode
      * If there are no nodes in the list, return undefined
      * Loop throught the list until you reach the tail
      * set the next property of the 2nd to the last node to be null
      * Set the tail to be the second to the last node
      * Decrement the length by the list of 1
      * Return the value of the node removed
      */
     pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length == 0){
            this.tail = null
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail= this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        } 
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        var newNode = new Node(val)
        var prev = this.get(index - 1) 
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
 }

 var list = new singlyLinkedList();

 list.push("first")
 list.push("second")
 list.push("hello")
 list.push("I")
 list.push("<3")
 list.push("Data structures")
 list.insert(3, "Yooloo");
 list.traverse()