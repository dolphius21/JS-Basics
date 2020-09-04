// Constructor Function
// Should use Pascal Notation: OneTwoThreeFour

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(1);

console.log(circle);