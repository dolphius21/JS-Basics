// Strick mode
// 'use strict';

const Circle = function() {
  this.draw = function() {console.log(this); }
};

const c = new Circle();
// Method call
c.draw();

const draw = c.draw;

console.log(draw);

// Function call
draw();


class Square {
  make() {
    console.log(this);
  }
}

const s = new Square();
const make = s.make;

make();