'use strict';
let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
       numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}

start();

function swowMyDB() {
 while (!== privat) {
   console.log(personalMovieDB);
 }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},    
    actors: {},
    genres: [],
    privat: false
};


 function rememberMyFilms () {
   for ( let i = 0; i <2; i++) { 
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
 }
 rememberMyFilms();

 function detectPersonalLevel() {
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
 }
 detectPersonalLevel();


 function writeYourGenres () {
   for (let i = 0; i < 3; i++) {
      personalMovieDB.genres = prompt("Ваш любимый жанр под номером ${++i}");
   }
 }


