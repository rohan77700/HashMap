import HashMap from "./HashMap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

test.set('apple', 'crimson');
test.set('banana', 'bright yellow');

test.set('moon', 'silver');

console.log("Length:", test.length());
console.log("Has 'carrot'?", test.has('carrot'));
console.log("Get 'moon':", test.get('moon'));
console.log("Remove 'dog':", test.remove('dog'));
console.log("Length after remove:", test.length());

console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries:", test.entries());

test.clear();
console.log("After clear, length:", test.length());