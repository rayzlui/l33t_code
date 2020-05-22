//From 707 in LeetCode

/**
 * Initialize your data structure here.
 */
class MyLinkedList {
  constructor() {
    this.head = null;
  }
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let i = 0;
  let current = this.head;
  while (i < index) {
    current = current.next;
    i++;
  }
  return current ? current.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let newNode = {};
  newNode.val = val;
  if (this.head) {
    newNode.next = this.head;
  }
  this.head = newNode;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let newNode = {};
  newNode.val = val;
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let newNode = {};
  newNode.val = val;
  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    let i = 0;
    let current = this.head;
    while (i < index - 1) {
      current = current.next;
      i++;
    }
    if (current) {
      let oldNext = current.next;
      newNode.next = oldNext;
      current.next = newNode;
    }
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let i = 0;
    let current = this.head;
    while (i < index - 1) {
      current = current.next;
      i++;
    }
    if (current) {
      let deleteNode = current.next;
      if (deleteNode) {
        let skip = deleteNode.next;
        current.next = skip;
      } else {
        current.next = null;
      }
    }
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

//faster

/**
 * Initialize your data structure here.
 */
class MyLinkedListII {
  constructor() {
    this.head = [];
  }
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  return this.head[index] !== undefined ? this.head[index] : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.head.unshift(val);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.head.push(val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index <= this.head.length) {
    this.head.splice(index, 0, val);
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < this.head.length) {
    this.head.splice(index, 1);
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
