"use strict";

// Задача №1
let username = 'Drew';
let bonusBalance = 1000;

// Задача №2
let info = function () {
	console.log(`Имя пользователя: ${username}`),
		console.log(`Количество бонусов: ${bonusBalance}`)
}
info();
// Переменные хранящие количество накопленных и списанных бонусов
let bonusPlus = 0,
	bonusMinus = 0;

// Функция начисления бонусов
let accural = function () {
	bonusBalance += 50;
	bonusPlus += 50;
	return bonusBalance, bonusPlus;
};

// Функция списания бонусов
let writeOff = function () {
	bonusBalance -= 3;
	bonusMinus += 3;
	return bonusBalance, bonusMinus;
};

// цикл отнимает 3 бонуса каждый день
for (let i = 0; i < 7; i++) {
	writeOff(i);
	console.log(`Сегодня сгорело 3 бонуса, всего сгоревших: ${bonusMinus}`);
}
// цикл прибавляет 50 бонусов раз в три дня
for (let i = 1; i < 7; i += 2) {
	accural();
	console.log(`За покупку начислено 50 бонусов, всего начисленных: ${bonusPlus}`);
}


info();
console.log(bonusMinus);
console.log(bonusPlus);
