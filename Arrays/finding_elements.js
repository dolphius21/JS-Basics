// Finding elements (Primitives)
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1));
console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));


// Finding elements (Reference Types)
const courses = [
  { id: 1, name: 'HTML'},
  { id: 2, name: 'CSS'},
];

const course = courses.find(function(course) {
  return course.name === 'HTML';
});

const index = courses.findIndex(function(course) {
  return course.name === 'CSS';
});

console.log(course);
console.log(index);