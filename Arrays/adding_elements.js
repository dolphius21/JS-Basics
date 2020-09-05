const numbers = [3, 4];

// Adding elements at the end of the array
numbers.push(5, 6);

// Adding elements at the beginning of the array
numbers.unshift(1, 2);

// Adding elements at the middle of the array
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);