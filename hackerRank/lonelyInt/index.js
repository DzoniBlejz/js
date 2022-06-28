// const array = [2, 2, 1, 3, 4, 3, 4];

// const findLonely = (arr) => {
//     for (const num of arr) {
//         if (arr.indexOf(num) === arr.lastIndexOf(num)) return num;
//     }
//     return 'No lonely integers.';
// };

// console.log(findLonely(array));


// const array = [2, 2, 1, 3, 4, 3, 4, 6, 8, 8, 9];

// const findAllLonely = (arr) => {
//     const map = {};

//     arr.forEach((num) => {
//         // Keep track of the number of time each number appears in the array
//         if (!map[num]) return (map[num] = 1);
//         map[num]++;
//     });

//     // Filter through and only keep the values that have 1 instance
//     return Object.keys(map).filter((key) => {
//         return map[key] === 1;
//     });
// };

// arrMap = {}

// arr.forEach(el => {
//     if (arrMap[el]) {
//         arrMap[el] += 1
//     } else {
//         arrMap[el] = 1
//     }
// });


// for (const key in arrMap) {
//     if (Object.hasOwnProperty.call(arrMap, key)) {
//             if (arrMap[key] === 1) {
//             console.log(key)
//         }
//     }
// }

const arr = [2, 2, 1, 3, 4, 3, 4, 6, 8, 8, 9];

let lonelyInt = arr.filter((val, i, arr) => {
    for (let j = 0; j < arr.length; j++) {
        if(val === arr[j] && i !== j) return false;
    } 
    return true;
})

console.log(lonelyInt);

