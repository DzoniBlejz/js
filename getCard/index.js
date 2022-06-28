// function getCard() {
// 	card = {
// 		value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
// 		suit: ["clubs", "spades", "hearts", "diamonds"],
// 	};
// 	let p = document.getElementById("display");

// 	const randomElement = randNumber(card.value);
// 	const randomSuit = randNumber(card.suit);

// 	card.value = randomElement;
// 	card.suit = randomSuit;
// 	p.innerHTML = `the value is: ${card.value} <br> the suit is: ${card.suit}`;
// }

// function randNumber(arr) {
// 	const idx = Math.floor(Math.random() * arr.length);
// 	return arr[idx];
// }

// kraca verzija

function getCard() {
	card = {
		value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
		suit: ["clubs", "spades", "hearts", "diamonds"],
	};
    return{value: randNumber(card.value) , suit: randNumber(card.suit)} ;
}

function randNumber(arr) {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}
