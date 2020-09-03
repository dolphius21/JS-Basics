const movie = {
  title: 'Se7en',
  releaseYear: 1995,
  rating: 8.6,
  director: 'David Fincher'
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(key + ': ' + obj[key]);
    }
  }
}