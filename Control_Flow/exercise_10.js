showStars(3);

function showStars(rows) {
  let stars = '';

  for (let row = 0; row < rows; row++) {
    stars += '*';
    console.log(stars);
  }
}