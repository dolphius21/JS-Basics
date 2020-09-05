const courses = [
  { id: 1, name: 'HTML'},
  { id: 2, name: 'CSS'},
];

const course = courses.find(course => course.name === 'HTML');

console.log(course);