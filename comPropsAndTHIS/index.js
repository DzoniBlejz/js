const role = "host";
const person = "Jools Holland";
const role2 = "Director";
const person2 = "Dzelal Dupljak";

const team = {
	[role]: person,
	[role2]: person2,
};

// console.log(team);

function addProp(obj, k, v) {
	const copy = {
		...obj,
	};
	copy[k] = v;
	return copy;
}

const addPropp = (obj, k, v) => {
	return { ...obj, [k]: v };
};

console.log(addPropp(team, "happy face", ":)"));

const annoyer = {
	phrases: [
		"literally",
		"cray cray",
		"I can't even",
		"Totes!",
		"YOLO",
		"Can't Stop, Won't Stop",
	],
	pickPhrase() {
		const { phrases } = this;
		const index = Math.floor(Math.random() * phrases.length);
		return phrases[index];
	},
	start() {
		this.timerId = setInterval(() => {
			console.log(this.pickPhrase());
		}, 2000);
	},
	stop() {
		clearInterval(this.timerId);
		console.log("no more annoyers");
	},
};


