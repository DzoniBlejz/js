// numbers.forEach(function(num){
//     console.log(num*num)
// })

// numbers.forEach(function(broj, index) {
//     console.log(broj,index);
// })

// books.forEach(function(book){
//     console.log(book.title.toLocaleUpperCase())
// })

// const numbers = [1, 2, 3, 4, 5, 6, 7, -8];

// const numDetail = numbers.map((n) => {
//     return {
//         value: n,
// 		isEven: n % 2 === 0,
// 		isPositive: n > 0,
// 	};
// });

// console.log(numDetail);

// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]
// func koja prima string , 1 argument, A ILI B , a - poen za tim A,
// b - poen za tim b
// return ko je pobedio
// 5 seta , odbojka , 5ti set se igra do 15
// s tim da ako je 24:24 igra se dodatni poen do 26

// let input =
// "ABABABABABABABABABABABABABABABABABABABABABABABABAAAAAAAAAAAABBBBBAAAAAAAAAABBBBBAAAAABBBBBBBBBBBBBBBBBBBBBBBBBABABABABABABABABABABAAAAAAAAAABBBBBAAAAA";
// teams = {
// 	teamA: 0,
// 	teamB: 0,
// 	setTeamA: 0,
// 	setTeamB: 0,
// };
// let winner = false;
// let continueFrom = 0;

// for (let i = continueFrom; i < input.length; i++) {
//     if (teams.teamA === 25 && teams.teamB < 25) {
//         teams.setTeamA = 1;
//         continueFrom = teams.teamA + teams.teamB;
//     }
//     if (teams.teamB === 25 && teams.teamA < 24) {
//         teams.setTeamB = 1;
//         continueFrom = teams.teamA + teams.teamB;
//     }
// 	if (input[i] === "A") {
// 		teams.teamA += 1;
// 	}
// 	if (input[i] === "B") {
// 		teams.teamB += 1;
// 	}
// }
// console.log(teams.teamA);
// console.log(teams.teamB);
// console.log(teams.setTeamA);
// console.log(teams.teamA);
// console.log(teams.teamB);
// console.log(teams.setTeamB);

// for (let i of input) {
//     if(i=== 'A') {
//         teams.teamA+=1;
//     } else if (i === 'B') {
//         teams.teamB+=1;
//     }
// }
// console.log(`pobedio je tim A: ${teams.teamA} \n teamB je imao: ${teams.teamB}`)
// score = "ABABABABABABABABABABABABABABABABABABABABABABABABAAAA";
// lastEl = score[score.length - 1]
// if (lastEl === "A") {
//     console.log("pobedio je team A")
// } else console.log("pobedio je team B")

score = {
	set1: "ABABABABABABABABABABABABABABABABABABABABABABABABAAAA",
	set2: "ABABABABABABABABABABABABABABABABABABABABABABABAB",
	set3: "ABABABABABABABABABABABABABABABABABABABABABABABA",
};

// keys.forEach((k) => {
// 	t1s = 0;
// 	t2s = 0;
// 	score[k].split("").forEach((p) => {
// 		if (p === "A") {
// 			t1s += 1;
// 		} else t2s += 1;
// 	});
//     if (t1s > t2s) {
//         score[k] = 'A';
//     } else score[k] = 'B';
// });

// console.log(score);

// let t1s = 0;
// let t2s = 0;

// let i = 0;
// let j = 0;

// let keys = Object.keys(score);
// let len = keys.length;

// for (i; i < len; i++) {
//     let key = keys[i];
//     for(j; j< score[key].length; j++) {
//         console.log(score[key][j])
//         if(score[key][j] === "A") {
//             t1s +=1;
//         } else {
//             t2s +=1;
//         }
//     }
// }

// console.log(t1s)
// console.log(t2s)
// keys.forEach((k) => {
//     console.log(k)
// })

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    let smth = grades.map((grade) => {
        let diff = 5 - (grade % 5);
        if (diff < 3 && grade >= 38) {
            grade+= diff;
        } 
        return grade;
    }
    )
    return smth;
}

