const numbers = [1, -1, 2, 3];

const allPositive = numbers.every(value => value >= 0);
const somePositive = numbers.some(value => value >= 0);
console.log(allPositive);
console.log(somePositive);