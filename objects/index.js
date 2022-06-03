// const userReviews = {};

// userReviews["queenBee49"] = 4.0;
// userReviews.mrSmith78 = 3.5;

// const student = {
// 	firstName: "David",
// 	lastName: "Jones",
// 	strengths: ["Music", "Art"],
// 	exams: {
// 		midterm: 92,
// 		final: 88,
// 	},
// };

// const game = {
// 	player1: {
// 		username: "Blue",
// 		playingAs: "X",
// 	},
// 	player2: {
// 		username: "Muffins",
// 		playingAs: "O",
// 	},
// 	board: [
// 		["0", null, "X"],
// 		["X", "0", "X"],
// 		[null, "O", "X"],
// 	]
// };

// let dozvoli = document.getElementById("display");
// dozvoli.innerHTML = game.board;

// const pallete = {
//     red : "crvena",
//     yellow: 'zuta',
//     blue: 'plava'
// };

// const palette2 = pallete;
// palette2.green = 'zuta';

// console.log(pallete);

// let niz = [1,2,3,4,5,6,7,8,9];

// for(let i = 0; i<niz.length; i++) {
//     console.log(niz[i]);
// }

// const myStudents = [
//     {
//         firstName : 'Zeus',
//         grade     : 28
//     },
//     {
//         firstName : 'Artemis',
//         grade     : 38
//     },
//     {
//         firstName : 'Hera',
//         grade     :  72
//     },
//     {
//         firstName : 'Dziko',
//         grade     : 90
//     },
// ];

// for(let i=0; i<myStudents.length; i++){
//     let student = myStudents[i];
//     console.log(`${student.firstName} scored ${student.grade}`);
// }

// const gameBoard = [
//     [4,32,8,4] ,
//     [64,8,32,2] ,
//     [8,32,16,4] ,
//     [2,8,4,2]
// ];

// let sum = 0;

// for(let i = 0; i<gameBoard.length; i++) {
//     let number = gameBoard[i];
//     for(let j = 0; j<number.length; j++) {
//         sum += number[j];
//     }
// }
// console.log(sum);

// let p = gameBoard.slice();
// console.log(p);

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while(guess !== target) {
//     console.log(`You haven't guessed right, Goal is ${target}, your entry was ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Now you have guessed right! Goal is ${target}, your entry was ${guess}`);

// let subreddits = ['soccer', 'popheads', 'cringe', 'books']

// for(let sub of subreddits) {
//     console.log(sub);
// }

// for(let char of 'cockadoodledoo') {
//     console.log(char.toUpperCase());
// }

// const magicSquare = [
// 	[2, 7, 6],
// 	[9, 5, 1],
// 	[4, 3, 8],
// ];

// for (let i = 0; i < magicSquare.length; i++) {
// 	let sum = 0;
// 	let row = magicSquare[i];
// 	for (let j = 0; j < row.length; j++) {
// 		sum += row[j];
// 	}
// 	console.log(`${row} summed to ${sum}`);
// }

// for (let row of magicSquare) {
// 	let sum = 0;
// 	for (let num of row) {
// 		sum += num;
// 	}
// 	console.log(`${row} summed to ${sum}`);
// }

const movieReviews = {
	Arrival: 9.5,
	Alien: 9,
	Amelie: 8,
	"In Bruges": 9,
	Amadeus: 10,
	"Kill Bill": 8,
	"Little Miss Sunshine": 8.5,
	Coraline: 7.5,
};

// let p = Object.keys(movieReviews);
// console.log(p);

// let pp = Object.values(movieReviews);
// // console.log(pp);


// const ratings = Object.values(movieReviews);
// let total = 0;
// for (let r of ratings) {
// 	total += r;
// }
// let avg = total / ratings.length;
// console.log(avg);


const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

// for(let i of jeopardyWinnings){
//     console.log(i);
// }

// ovaj deo koda ce da ispisuje error
//index.js:176 Uncaught TypeError: jeopardyWinnings is not iterable
// iz razloga sto Objekat nije iterabilan, sto znaci ne moze da se prodje kroz njega 
// pomocu petlje, ne ponavlja se 
// pa bi ovo bilo resenje

// for (let movie of Object.keys(movieReviews)) {
// 	console.log(movie);
// 	console.log(movieReviews[movie]);
// }

// ako koristimo for in, uzecemo sve vrednosti i kljuceve objekta
// dok smo sa for of morali da dohvatimo vrednosti i kljuceve objekta pomocu Object.keys("nazivObjekta")


// for(let prop in jeopardyWinnings) {
//     console.log(prop);
//     console.log(jeopardyWinnings[prop]);
// }

// pa ako bi hteli da saberemo sve vrednosti ovog objekta i odredimo average, napravili bi smo ovakvu petlju

// let sum=0;
// let avg=0;

// for(let prop in jeopardyWinnings) {
//     sum+= jeopardyWinnings[prop];
//     avg= sum/prop.length;
// }
// console.log(sum);
// console.log(avg);


// jedina razlika izmedju for of i for in petlje jeste
// FOR IN petlja prolazi kroz sve PROPERTIJE (kljuceve) datog objekta
// FOR OF petlja prolazi kroz sve VREDNOSTI datog objekta

