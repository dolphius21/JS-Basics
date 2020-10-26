function titleCase(str) {
  const toArr = str.toLowerCase().split(" ");
  const output = toArr.map((word) => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });
  return output.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
