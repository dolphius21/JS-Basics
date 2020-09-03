// Speed Limit = 70;
// Every 5 points above speedlimit => 1 point
// 12 points => Liscense Suspended

checkSpeed(81);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const points = Math.floor( (speed - speedLimit) / kmPerPoint );
  
  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  }

  if (points >= 12) {
    console.log('Liscense Suspended');
  } else {
    console.log('Points' + ': ' + points);
  } 
}