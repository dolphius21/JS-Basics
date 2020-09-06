const numbers = [1, 2, 3];

// for...of
for (let number of numbers) {
  console.log(number);
}

// forEach
numbers.forEach(number => console.log(number));
numbers.forEach((number, index) => console.log(`${index}: ${number}`));
