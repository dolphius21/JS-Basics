const numbers = [1, 2, 3, 4];

try {
  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch(e) {
  console.log(e.message);
}


function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error('Invalid array.')
  }
  return array.reduce((acc, current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    return acc + occurence;
  }, 0);
}