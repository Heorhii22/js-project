"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "").trim();
  while (
    numberOfFilms === "" ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "").trim();
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const watchedMovie = prompt("Один из последних фильмов?", "").trim();
    const rating = prompt("Оценка просмотренного фильма?", "").trim();

    if (
      watchedMovie !== "" &&
      rating !== "" &&
      watchedMovie.length < 50 &&
      watchedMovie !== null &&
      rating !== null
    ) {
      personalMovieDB.movies[watchedMovie] = rating;
      console.log("Thanks for your reply!");
    } else {
      console.log("error! try again!");
      i--;
    }
  }
}

rememberMyFilms();

function detectMyLevel() {
  if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB <= 30) {
    console.log("Довольно неплохо! Вы - классический зритель.");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка!");
  }
}

detectMyLevel();

function showMyDB() {
  if (!personalMovieDB.private) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`
    ).trim();
  }
}
writeYourGenres();

// function getTimeFromMinutes(minutes) {
//   let hours = Math.round(minutes / 60);

//   if (minutes >= 60) {
//     return `Это ${hours} часов и ${minutes - hours * 60} минут`;
//   }
// }

// console.log(getTimeFromMinutes(500));
