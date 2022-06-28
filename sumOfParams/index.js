function checkParams(numbers) {
	numbers = numbers || 0;
	numbers = typeof numbers === "undefined" ? 0 : numbers;
	let sum = 0;
	let i = 0;
	while (i < numbers.length) {
		sum += numbers[i];
		i++;
	}
    sum === 0 ? console.log("parametar je prazan") : console.log(sum);
}

const addNumbers = (...args) => args.reduce((a,b) => a + b, 0) 
const added = addNumbers(1,2,3,4,5,6,7,8)
const added2 = addNumbers(1,2,3)

console.log(added, added2)
