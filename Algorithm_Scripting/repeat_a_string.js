function repeatStringNumTimes(str, num) {
  let accStr = str;
  if (num < 1) {
    return "";
  }
  for (let i = 1; i < num; i++) {
    str += accStr;
  }
  return str;
}

// Alternative Soluction

// Solution 1
// function repeatStringNumTimes(str, num) {
//   let accumulatedStr = "";

//   while (num > 0) {
//     accumulatedStr += str;
//     num--;
//   }

//   return accumulatedStr;
// }

// Solution 2
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
// }

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("abc", 0));
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("*", 8));
