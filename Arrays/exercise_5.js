const countOccurrences = (array, searchElement) => {
  return array.reduce((count, currElement) => {
    let occurence = (currElement === searchElement) ? 1 : 0;
    return count + occurence;
  }, 0);
};

const numbers = [1, 2, 3, 4, 1];
const count = countOccurrences(numbers, 1);
console.log(count);