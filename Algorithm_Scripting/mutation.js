function mutation(arr) {
  const lowerCase = arr.map((item) => item.toLowerCase());
  for (let i = 0; i < lowerCase[1].length; i++) {
    if (lowerCase[0].indexOf(lowerCase[1][i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
