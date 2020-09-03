const array = [0, null, undefined, '', 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
  let truthy = 0;
  for (let item of array) {
    if (item) ++truthy; 
  }
  return truthy;
}