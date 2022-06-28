// posto this vraca ceo objekat, ne mozemo da ga pozivamo
// u posebnu funkciju, jer ne vidi element
// pa smo napravili globalni objekat i tu smestamo vrednosti
values = {};

const takevalue = (input) => {
	let t = input.value.split(",").map(Number);
	values[input.name] = t;
};

const createMatrix = () => {
	matrix = [];
	for (const inp in values) {
		matrix.push(values[inp]);
		console.log(values);
	}

	let para = document.getElementById("display");
	para.innerHTML = ` [${matrix}]`;
};
