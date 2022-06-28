// function Check(username, password) {
//     if(username.includes(" "))  {
//         // mogli smo da koristimo i ako je username.indexOf(' ') !== 1
//         console.log("ima razmak");
//     }
//     if(password.length < 8 || password.includes(username)) {
//         console.log("You have enterred wrong values!")
//         return false;
//     }

//     return true;
// }

// console.log(Check("nik ola", "nikola123"));

// function addToArray(arr) {
//     let total=0;
//     for(let num of arr) {
//         total += num;
//     }
//     let res = total / arr.length;
//     console.log(res);
// }

// addToArray([2,4,5,6,7,8,80000]);

// function isPangram(sentence) {
//     for(let char of )
// }

// function checkPass(username, password) {
// 	if (
// 		username.includes(" ") ||
// 		password.lentgh < 8 ||
// 		password.includes(username)
// 	) {
// 		return false;
// 	}
// 	return true;
// }

// let sum = 0;

// function checkArray(param) {
// 	for (let i of param) {
// 		console.log(i);
// 		sum += i;
// 	}
// 	let average = 0;
// 	average = sum / param.length;
// 	console.log(average);
// }

// console.log(checkArray([1, 2, 3, 4, 5, 6, 7]));

// check if the word is Pangram

// function checkPangram(param) {
//     let lowerCased = param.toLowerCase();
//     let abeceda = 'abcdefghijklmnopqrstuvwxyz';
//     for(let char of abeceda) {
//         if(!lowerCased.includes(char)) {
//             return false;
//         }
//     }
//     return true;
// }

// function callTwice(arg) {
//     arg();
//     arg();
// }
// function laugh() {
//     console.log("ha ha ha");
// }
// callTwice(laugh)

// function repeat(f, n) {
//     let i=0;
// 	while (i !== n) {
// 		f();
//         i++;
// 	}
// }

// function laugh() {
// 	console.log("heheheh");
// }

// repeat(laugh, 5);

const uradiSveStoJaHocu = (nesto) => {
	let p = nesto.value;
    const create = createDiv(p)
    document.getElementsByTagName("body")[0].innerHTML += create;
};

const createDiv = (boja) => {
	let t = `<div style='background-color: ${boja}; height: 350px'></div>`;
    console.log(t)
	return t;
};
