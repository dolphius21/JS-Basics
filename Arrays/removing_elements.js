const numbers = [1, 2, 3, 4];

// Removing elements at the end of the array
const last = numbers.pop();
console.log(last);

// Removing elements at the beginning of the array
const first = numbers.shift();
console.log(first);

// Removing elements at the middle of the array
const letters = ['a', 'b', 'c', 'd'];
letters.splice(1, 2);

console.log(letters);
console.log(numbers);