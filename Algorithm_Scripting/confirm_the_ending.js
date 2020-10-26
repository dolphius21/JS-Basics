function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Abstraction", "action"));
