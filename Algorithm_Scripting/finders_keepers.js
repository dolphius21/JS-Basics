function findElement(arr, func) {
  return arr.find((num) => func(num));
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], (num) => num % 2 === 0));
