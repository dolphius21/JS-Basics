
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    this.draw();
    console.log('move');
  }
}

// Prototypes
Circle.prototype.draw = function() {
  console.log('draw');
}

Circle.prototype.toString = function() {
  return 'Circle with radius ' + this.radius;
}

const c1 = new Circle(1);
const c2 = new Circle(1);

// Returns intance members
console.log(Object.keys(c1));

// Returns all members (instance and prototype)
for (let key in c1) {
  console.log(key);
}