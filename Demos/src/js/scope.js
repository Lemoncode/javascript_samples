// Mostrar esto preguntar, cual es el valor esperdo por los alumnos
var greet = function greet () {
  var hello = 'Hello!!';
  console.log(hello);
};

// console.log(hello);
/********************************************************************/
// Example 2.
var store = function () {
  var item = {
    description: 'Just an item.',
    value: 45.89
  };

  function addItem () { // Declaración no invocación.
    var items = [];
    items.push(item);
    return items;
  }

  return addItem();
};

console.log(store());
/**********************************************************************/
