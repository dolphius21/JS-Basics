const voxel = { x: 3.6, y: 7.4, z: 6.54 };

const x = voxel.x; // x = 3.6
const y = voxel.y; // y = 7.4
const z = voxel.z; // z = 6.54

const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54  => quicker way of assigning things from an object into a variable.
console.log(a, b, c);

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgTemperatures) {
  // Change code below this line
  const { tomorrow: tempOfTomorrow } = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// Destructuring assignment with nested objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxOfTmrw(forecast) {
  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Destructuring assignement to assign varialbles from arrays
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Use destructuring assignment to pass an object as a function's parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 38.85,
};

const half = ({ max, min }) => (max + min) / 2;

console.log(stats);
console.log(half(stats));
