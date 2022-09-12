"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};




function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('Насколько оцениваете его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

//rememberMyFilms();

function detectedPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотренно довольно мало фильмов')
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка')
	}
}

detectedPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB)
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();


/*let UserEyesColor;

let User,
	UserName = 'Вася';

User = UserName;

console.log(UserName);

let userSize = 0;
console.log(userSize);

let userName;
console.log(typeof userName);

console.log(92 > '11');

let num = 0;
while (num < 3) {
	console.log('Число:' + num);
	num++;

}

first: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if (size == 1) {
			break first;
		}
	}
}


let showMassage = function () {
	console.log('Сообщение');
};
showMassage();

let Message = function showMessage();

showMessage() {
	console.log('Сообщение');
}

Message();

let userInfo = {
	name: "Вася",
	age: 30
}
let user = userInfo;
user.age = 45;

console.log(userInfo.age);


function UserInfo(name) {
	this.name = name;
	this.age = 30;
}

console.log(new UserInfo('Вася', 35));

let text = 'привет!';
console.log(text.length[0]toUpperCase);

/*
+Оля в конец,
заменить Иштван на Петя
-1 эл и показать
маша и паша в начало

let number = ["Первый","Второй","Третий","Четвертый"];
function num() {
	for (let i = 0; i< 3; i++) {
			
			console.log(number);
	}
}


let users = ["Ваня", "Петя"];
users.push("Оля");
console.log(number(), users);
*/


