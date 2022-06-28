let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[21, 8, 1],
];

sumOneDiag = 0;
sumTwoDiag = 0;

for (let i = 0; i < matrix.length; i++) {
    sumOneDiag += matrix[i][i]
    sumTwoDiag += matrix[i][matrix.length-1-i];
}
return Math.abs(sumOneDiag-sumTwoDiag);


// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if(i+j === matrix.length-1) {
//             sumTwoDiag += matrix[i][j];
//         } 
//     }
// }
// console.log(sumTwoDiag)

// for (let i = 0; i < matrix.length; i++) {
// 	for (let j = 0; j < matrix[i].length; j++) {
// 		if (i === j) {
// 			sumOneDiag += matrix[i][j];
// 		}
// 		if ((i === 0 && j === 2) || (i === 1 && j === 1) || (i === 2 && j === 0)) {
// 			sumTwoDiag += matrix[i][j];
// 		}
// 	}
// }