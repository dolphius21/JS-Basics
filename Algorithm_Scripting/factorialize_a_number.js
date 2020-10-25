// My Solution
function factorialize(num) {
  let factor = 1;
  for(let i = 1; i <= num; i++){
    factor *= i;
  }
  return factor;
}

// Alternative Solutions

// Solution 1
// function factorialize(num) {
//   for (let product = 1; num > 0; num--) {
//     product *= num;
//   }
//   return product;
// }

// factorialize(5);

// Solution 2
// function factorialize(num) {
//   for (var product = 1; num > 0; num--) {
//     product *= num;
//   }
//   return product;
// }

// factorialize(5);

// Solution 3
// function factorialize(num, factorial = 1) {
//   if (num == 0) {
//     return factorial;
//   } else {
//     return factorialize(num - 1, factorial * num);
//   }
// }

// factorialize(5);

// Solution 4
// function factorialize(num, factorial = 1) {
//   return num < 0 ? 1 : (
//     new Array(num)
//       .fill(undefined)
//       .reduce((product, val, index) => product * (index + 1), 1)
//   );
// }
// factorialize(5);




console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));