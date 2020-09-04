// Factory Function
function createCircle(radius) {
  return {
    radius,

    draw() {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);
console.log(circle.constructor);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const another = new Circle(1);
console.log(another.constructor);

let x = {}; // Javascript engine will translate => let x = new Object() 
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, 4...

// Every Object has a constructor property
