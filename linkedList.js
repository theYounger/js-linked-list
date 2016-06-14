/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  //[Array] an array protected by closure

  //head and tail assignment
  var head = null;
  var tail = null;
  var index = [];

  //node
  var node = {};


/*-------------------------------------
--------------FUNCTIONS----------------
--------------------------------------*/
  function getHead() {
    return head;
  }
/////////////////////////////////////////
  function getTail() {
    return tail;
  }

/////////////////////////////////////////
  function add(Value) {
    if(head === null && tail === null) { //first node entry, index 0
      node = {
        value: Value,
        next: null,
      };
      head = node;
      tail = node;
    } else { //first node exists, index 1
      node = {
        value: Value,
        next: null,
      };
      tail.next = node;
      tail = node;
    }
    return node;
  }
/////////////////////////////////////////
  function get(Number) {
    this.next();
    for(var i = 0; ; i++) {
      this.next()

    }
  }

/////////////////////////////////////////
  function remove(Number) {
    return Number;

  }

/////////////////////////////////////////
  function insert(Value, Number) {
    return insert;

  }

/*-------------------------------------
-------------OBJ RETURN----------------
--------------------------------------*/
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };

}