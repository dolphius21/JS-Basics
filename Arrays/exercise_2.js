const includes = (array, searchElement) => {
  const element =  array.find(element => element === searchElement);
  return element === searchElement;
};

const numbers = [1, 2, 3, 4];
console.log(includes(numbers, 4));

