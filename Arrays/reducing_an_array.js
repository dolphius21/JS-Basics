const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers) {
  sum += n;
}

console.log(sum);

// sum = 0, currentNum = 1 => sum = 1
// sum = 1, currentNum = -1 => sum = 0
// sum = 0, currentNum = 2 => sum = 2
// sum = 2, currentNum = 3 => sum = 5
const total = numbers.reduce((sum, currentNum) => sum + currentNum, 0);

console.log(total);
