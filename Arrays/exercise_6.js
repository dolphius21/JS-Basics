const getMax = array => {
  if (array.length === 0) {
    return undefined;
  }
  return array.reduce((acc, curr) => (curr > acc) ? curr : acc);
};

const numbers = [1, 2, 5, 4];
const max = getMax(numbers);
console.log(max);