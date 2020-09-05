const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// Old method of cloning objects
// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// };
// another['radius'] = circle['radius'];


// Newer method of cloning objects
// const another = Object.assign({}, circle);

// More simpler way to clone an object
const another = { color: 'yellow', ...circle }; // spread operator

console.log(another);