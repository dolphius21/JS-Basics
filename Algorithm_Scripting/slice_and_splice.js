function frankenSplice(arr1, arr2, n) {
  const copy = arr2.slice();
  copy.splice(n, 0, ...arr1);
  return copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
