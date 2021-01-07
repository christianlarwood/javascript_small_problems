function objectsEqual(obj1, obj2) {
  // compare keys
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let i = 0; i < obj1Keys.length; i += 1) {
    if (obj1Keys[i] !== obj2Keys[i]) {
      return false;
    }
  }

  // compare values
  let obj1Values = Object.values(obj1);
  let obj2Values = Object.values(obj2);
  for (let i = 0; i < obj1Values.length; i += 1) {
    if (obj1Values[i] !== obj2Values[i]) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false