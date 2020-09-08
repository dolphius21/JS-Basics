function Circle(radius) {
  this.radius = radius;
  
  // example of a private property.
  let defaulLocation = { x: 0, y: 0};
  
  // example of a private method.
  let computeOptimumLocation = function(factor) {
    // ...
  }

  this.draw = function() {
    computeOptimumLocation(0.1);
    console.log('draw');
  };
}

const circle = new Circle(10);