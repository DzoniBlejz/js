let arr = [];

const addNumber = () => {
	let input = document.getElementById("ins").value;
	let disp = document.getElementById("display");
	arr.push(input);
	console.log(arr);
	if (input % 3 === 0 && input % 5 === 0) {
		for (let i of arr) {
			if (i % 3 === 0 && i % 5 === 0) {
				disp.innerHTML += `<span style="color:blue;"><br> ${i} fizzbuzz</span>`;
			}
			else if (i % 3 === 0 && i % 5 !== 0) {
				disp.innerHTML += `<span style="color:red;"><br> ${i} fizz </span>`;
			} else if (i % 5 === 0 && i % 3 !== 0) {
				disp.innerHTML += `<span style="color:green;"> <br> ${i} buzz </span>`;
			} else {
				disp.innerHTML += `<br> ${i} nije deljiv`;
			}
		}
	}
};
