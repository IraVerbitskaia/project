'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},    
    actors: {},
    genres: [],
    privat: false
};

let i = 1;
 for (i = 0; i <2; i++) { 
let a = prompt('Один из последних просмотренных фильмов?' , ''),
    b = prompt('На сколько оцените его?' , '');

      if (a !== '' && b !== '' && a.length < 50 && a !== null && b !== null) {
        
      personalMovieDB.movies[a] = b;
      console.log('done');
      } else {
        console.log('error');
        i--;
      }
 }

 console.log(personalMovieDB);
 if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    alert("Вы классический зритель");
 } else if (personalMovieDB.count > 30) {
    alert("Вы киноман!");
 } else {
    alert("Произошла ошибка")
 }

