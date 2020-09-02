// Hour
// If Hour is beween 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 10;
let greeting;

if (hour >= 6 && hour < 12) {
  greeting = 'Good morning!';
} else if (hour >= 12 && hour < 18) {
  greeting = 'Good afternoon!';
} else {
  greeting = 'Good evening';
}

console.log(greeting);