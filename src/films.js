// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let directors = movies.map(movie=>movie.director);

 // console.log("EXERCICE 1 ->", directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
 
  let myDirector = movies.filter(movie => movie.director === director);

 // console.log("EXERCICE 2 ->", myDirector)
    return(myDirector);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const myDirector = getMoviesFromDirector(movies, director)
  const sumScore = myDirector.reduce((acumulador, movie) => acumulador += movie.score, 0);
  const averageScore = Number(sumScore/myDirector.length);
 // console.log("EXERCICE 3 ->", averageScore);
  return (averageScore);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const movieTitles = movies.map(movie => movie.title);
  movieTitles.sort(); 
 // console.log("EXERCICE 4 ->", movieTitles) 
  return movieTitles.slice(0, 20); 
}

// Exercise 5: Order by year, ascending
function orderByYear(moviesArr) {
  const sortedMovies = [...moviesArr].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title); // Ordena alfabéticamente por título en caso de tener el mismo año
    }
    return a.year - b.year; // Ordena por año de forma ascendente
  });
 // console.log("EXERCICE 5 ->", sortedMovies)
  return sortedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const filteredMovies = movies.filter(movie => movie.genre.includes(category) && movie.score );
  
  const totalScore = filteredMovies.reduce((acc, movie) => (acc + Number(movie.score) || 0), 0);

  const averageScore = totalScore / (filteredMovies.length || 1);

  if (averageScore === 7) {
    return averageScore;
  }
  else return  Number(averageScore.toFixed(2))
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const convertedMovies = movies.map(movie => {
    const durationString = movie.duration;
    const hoursMatch = durationString.match(/\d+h/);
    const minutesMatch = durationString.match(/\d+min/);
    const hours = hoursMatch ? Number(hoursMatch[0].replace('h', '')) : 0;
    const minutes = minutesMatch ? Number(minutesMatch[0].replace('min', '')) : 0;
    const totalMinutes = hours * 60 + minutes;
    return { ...movie, duration: totalMinutes };
  });
  return convertedMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesOfYear = movies.filter(movie => movie.year === year);
  moviesOfYear.sort((a, b) => b.score - a.score);
 
  /* 
  for (let i = 0; i < moviesOfYear.length - 1; i++) {
    for (let j = i + 1; j < moviesOfYear.length; j++) {
      if (moviesOfYear[j].score > moviesOfYear[i].score) {
        const temp = moviesOfYear[i];
        moviesOfYear[i] = moviesOfYear[j];
        moviesOfYear[j] = temp;
      }
    }
  } */

  return [moviesOfYear[0]]; 
 
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
