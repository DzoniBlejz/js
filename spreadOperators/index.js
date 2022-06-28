// const feline = {
// 	legs: 4,
// 	family: "Felidae",
// };

// const canine = {
// 	family: "Caninae",
// 	furry: true,
// 	legs: 4,
// };

// const dog = {
// 	...canine,
// 	isPet: true,
// 	adorable: true,
// };
// //{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

// const houseCat = {
// 	...feline,
// 	isGrumpy: true,
// 	personality: "unpredictable",
// };
// //{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

// const catDog = {
// 	...canine,
// 	...feline,
// };
// //{family: "Felidae", furry: true, legs: 4}

// //Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
// const tripod = {
// 	...canine,
// 	legs: 3,
// };
// //{family: "Caninae", furry: true, legs: 3}

// const catDogClone = {
// 	...catDog,
// };

// const random = [
// 	..."hello",
// 	{
// 		...catDog,
// 	},
// ];

// const cephalopods = [
// 	"dumbo octopus",
// 	"humboldt squid",
// 	"flamboyant cuttlefish",
// ];

// const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

// const cnidaria = ["fire coral", "moon jelly"];

// const mollusca = [...cephalopods, ...gastropods];
// //["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

// const inverts = [...cnidaria, ...gastropods, ...cephalopods];
// //["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

// const cephCopy = [...cephalopods];
// //["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

function sum() {
	const args = [...arguments];
	let argggg = args.reduce((acc, val) => {
		return acc + val;
	});
	console.log(argggg);
}
sum(1, 2, 3, 4, 5);

function summm(...nums) {
	const suma = nums.reduce((sum, val) => {
		return sum + val;
	});
	console.log(suma);
}

summm(1, 2, 3, 4, 51);

function fullName(first, last, ...titles) {
	console.log("first", first);
	console.log("last", last);
	console.log("titles", titles);
}

//destructuring arrays

const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
  ];
  
  // The old way:
  // const gold = raceResults[0]
  // const silver = raceResults[1]
  // const bronze = raceResults[2]
  
  // Using Destructuring:
  const [gold, silver, bronze] = raceResults;
  gold; //'Eliud Kipchoge'
  silver; //'Feyisa Lelisa'
  bronze; //'Galen Rupp'
  
  const [first, , , fourth] = raceResults;
  first; //'Eliud Kipchoge'
  fourth; //'Ghirmay Ghebreslassie'
  
  const [winner, ...others] = raceResults;
  winner; //'Eliud Kipchoge'
  others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]

  const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
  }
  
  // Rather than destructuring INSIDE the function body
  // function print(person) {
  //   const {
  //     first,
  //     last,
  //     title
  //   } = person;
  //   console.log(`${first} ${last}, ${title}`)
  // }


  // Destructuring parameters
  
  // We can unpack the values we want right in the parameter list:
  function print({
    first,
    last,
    title
  }) {
    console.log(`${first} ${last}, ${title}`)
  }
  
  const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
  ]
  
  // Also works with array parameters:
  function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
  }
