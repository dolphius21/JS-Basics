// swap values of a and b
let a = 'red';
let b = 'blue';

// my solution
// a = (a === 'red') ? 'blue' : red;
// b = (a === 'blue') ? 'red' : blue;

// the solution
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);