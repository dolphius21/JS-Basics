// Reference Types

// Object Literal
let person = { 
  name: 'Dolph',
  age: 29
};

// Dot Notation
person.name = 'Rudolph';

// Bracket Notation
person['name'] = 'John'

console.log(person.name);


// Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors[0]);


// Functions

// Performing a task
function greet(name) {
  console.log('Hello ' + name);
}

// Calculating a Value
function square(number) {
  return number * number;
}

greet('Dolph');
console.log(square(2));