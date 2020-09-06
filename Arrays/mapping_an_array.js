const numbers = [1, -1, 2, 3];

const items = numbers
  .filter(number => number >= 0)
  .map(number => ({ value: number}))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(items);
