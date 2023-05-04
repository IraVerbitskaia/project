'use strict'
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},    
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?' , '');
const lastFilmValue = prompt('На сколько оцените его?' , '');
const lastFilm2 = prompt('Один из последних просмотренных фильмов?' , '');
const lastFilmValue2 = prompt('На сколько оцените его?' , '');

 personalMovieDB.movies[lastFilm] = lastFilmValue;
 personalMovieDB.movies[lastFilm2] = lastFilmValue2;
 
 console.log(personalMovieDB);

