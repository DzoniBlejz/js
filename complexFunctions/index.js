// // find

// const List = [
// 	"The fantastic Mr. Fox",
// 	"Mr. and Mrs. Smith",
// 	"Nesto novo",
// 	"Mr.Deeds",
// 	"Mrs. Doubtfire",
// ];

// const word = List.find((movies) => {
// 	return movies.includes("Mrs");
// });
// // vratice prvi element koji sadrzi "Mrs" u celom nazivu

// const movie2 = List.find((m) => m.indexOf("Mrs") === 0);

// // vratice element kojem se 'Mrs' nalazi na pocetku

// // const books = [
// // 	{
// // 		title: "Good Omens",
// // 		authors: ["Terry Pratchett", "Neil Gaiman"],
// // 		rating: 4.25,
// // 	},
// // 	{
// // 		title: "Bone: The Complete Edition",
// // 		authors: ["Jeff Smith"],
// // 		rating: 4.42,
// // 	},
// // 	{
// // 		title: "American Gods",
// // 		authors: ["Neil Gaiman"],
// // 		rating: 4.11,
// // 	},
// // 	{
// // 		title: "A Gentleman in Moscow",
// // 		authors: ["Amor Towles"],
// // 		rating: 4.36,
// // 	},
// // ];

// // const goodBook = books.find((b) => {
// // 	return b.rating > 4.3;
// // });

// // const findFirst = books.find((b) => {
// // 	return b.authors.includes("Neil Gaiman");
// // });

// // filter

// const nums = [34, 25, 45, 66, 34, 13, 67, 99];
// const odds = nums.filter((n) => n % 2 !== 0);
// console.log(odds);


// const goodBooks = books.filter((b) => b.rating > 4.3);
// // console.log(goodBooks);

// const onlyFantasy = books.filter((f) => {
	// 	return f.genres.includes("fantasy");
	// });
	// // console.log(onlyFantasy)
	
	// const input = "The";
	// const results = books.filter((name) => {
		// 	const title = name.title.toLowerCase();
		// 	return title.includes(input.toLowerCase());
		// });
		// console.log(results);
		
		// // every and some
		
		// const words = ["dog", "dig", "log", "bag", "wag"];
		
		// const all3Lets = words.every((m) => m.length === 3);
		// const allEndInG = words.every((w) => {
			//     const last = w.length-1;
//     return w[last] === 'g'
// });

// const someStartsWithD = words.some(letter => {
	//     return letter[0] === 'd';
// })

// sort

// reduce

// const grades = [87, 64, 97, 99, 80, 45, 54, 23, 70];

// const maxGrade = grades.reduce((max, currVal) => {
	// 	if(currVal > max) return currVal;
	// 	return max;
	// })
	// console.log(maxGrade)
	// ili return Math.max(max, currentVal);
	
	const votes = ["y", "y", "y", "y", "y", "n", "n", "y", "n", "n", "n", "y"];
	
	let voteCounter = votes.reduce((accumulator, vote) => {
		if (accumulator[vote]) {
			accumulator[vote]++;
		} else accumulator[vote] = 1;
		return accumulator;
	}, {});
	
	console.log(voteCounter);
	
	const books = [
		{
			title: "Good Omens",
			authors: ["Terry Pratchett", "Neil Gaiman"],
			rating: 4.25,
			genres: ["fiction", "fantasy"],
		},
		{
			title: "A truly horrible book",
			authors: ["Xavier Time"],
			rating: 2.18,
			genres: ["fiction", "garbage"],
		},
		{
			title: "Changing My Mind",
			authors: ["Zadie Smith"],
			rating: 3.83,
			genres: ["nonfiction", "essays"],
		},
		{
			title: "Bone: The Complete Edition",
			authors: ["Jeff Smith"],
			rating: 4.42,
			genres: ["fiction", "graphic novel", "fantasy"],
		},
		{
			title: "American Gods",
			authors: ["Neil Gaiman"],
			rating: 4.11,
			genres: ["fiction", "fantasy"],
		},
		{
			title: "A Gentleman in Moscow",
			authors: ["Amor Towles"],
			rating: 4.36,
			genres: ["fiction", "historical fiction"],
		},
		{
			title: "The Name of the Wind",
			authors: ["Patrick Rothfuss"],
			rating: 4.54,
			genres: ["fiction", "fantasy"],
		},
		{
			title: "The Overstory",
			authors: ["Richard Powers"],
			rating: 4.19,
			genres: ["fiction", "short stories"],
		},
		{
			title: "The Way of Kings",
			authors: ["Brandon Sanderson"],
			rating: 4.65,
			genres: ["fantasy", "epic"],
		},
		{
			title: "Lord of the flies",
			authors: ["William Golding"],
			rating: 3.67,
			genres: ["fiction"],
		},
	];

const groupedByRatings = books.reduce((groupedBooks, book) => {
	const key = Math.floor(book.rating);
	if (!groupedBooks[key]) groupedBooks[key] = [];
	groupedBooks[key].push(book);
	return groupedBooks;
}, {})

console.log(groupedByRatings)