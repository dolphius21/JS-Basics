const first = [1, 2, 3];
const second = [4, 5 ,6];
const obj = [{id: 1}];

// combining arrays
const combined = first.concat(second);
const combined2 = obj.concat(second);
obj[0].id = 10;

// slicing arrays
const sliced = combined.slice(2, 4);

console.log(combined);
console.log(combined2);
console.log(sliced);

