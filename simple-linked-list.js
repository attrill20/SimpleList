//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// this is the node that contains a value and a pointer reference to the next node in the linked list
export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
}

// this is the single linked list that contains all the operations to pass the tests
export class List {
  constructor(values = []) {
    this._length = 0;
    this._head = null;

    // if values is an array, execute this code which adds a new element to the linked list (will reverse the order of the array)
    if (Array.isArray(values)) {
      values.forEach ((value) => {
        this.add(new Element(value));
      })
    }
  }

  add(element) {
    // if head isn't null, then update the next pointer to the previous head
    if (this._head !== null) {
        element._next = this._head;
    }
    this._head = element;
    this._length++;
}

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  // Converts the linked list to an array by traversing it from head to tail (while) and pushing each element's value to the array
  toArray() {
    const array = [];
    let currentElement = this._head;
    while (currentElement !== null) {
      array.push(currentElement.value);
      currentElement = currentElement.next;
    }
    return array;
  }

  // Creates and returns a new list with elements in the reverse order of the current list by converting to an array, and then turning back into a linked list
  reverse() {
    return new List(this.toArray());
  }
}