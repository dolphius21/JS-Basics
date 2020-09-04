// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const scores = [80, 80, 95];

function calculateAvg(array) {
  let sum = 0;

  for (let score of array) {
    sum += score;
  }

  return sum / array.length;
}

function giveGrade(scores) {
  const average = calculateAvg(scores);

  if (average < 60) {
    return 'F';
  } else if (average < 70) {
    return 'D';
  } else if (average < 80) {
    return 'C';
  } else if (average < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

console.log(giveGrade(scores));