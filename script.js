'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},    
    actors: {},
    genres: [],
    privat: false,
    start: function() {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
   
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
   },
    rememberMyFilms: function() {
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
 },

    detectPersonalLevel: function() {
   if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
      alert("Вы классический зритель");
   } else if (personalMovieDB.count > 30) {
      alert("Вы киноман!");
   } else {
      alert("Произошла ошибка")
   }
 },
    showMyDB: function(hidden) {
   if (!hidden) {
     console.log(personalMovieDB);
   }
  },
    writeYourGenres: function() {
   for (let i = 0; i < 3; i++) {
      if (personalMovieDB.genres == "" || personalMovieDB.genres == null) {
         i--;
      }
      personalMovieDB.genres[i+1] = prompt(`Ваш любимый жанр под номером ${i+1}`);
   }
  personalMovieDB.genres.forEach((item, i) => {
   console.log (`Любимый жанр #${i+1} -это ${item}`);
  });
 },
    togleVisibleMyDB: function() {
   if (personalMovieDB.privat) {
      personalMovieDB.privat = falsee;
   } else {
      personalMovieDB.privat = true;
   }
 },
 
};
