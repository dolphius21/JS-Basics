const except = (array, excluded) => {
  const output = [];
  array.forEach(element => {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  });
  return output;
};

const numbers = [1, 2, 3, 4];
const output = except(numbers, [1, 2]);
console.log(output);
