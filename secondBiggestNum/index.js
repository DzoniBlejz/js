let arrTest = [7, 70, 50, 24, 44, 0, 1, 45, 100, 23, 4, 56, 80]

// const secondBiggest = (arr) => {
//     let sortedArray = arr.sort(function(a,b) {
//         return a - b;
//     })
//     console.log(sortedArray[sortedArray.length - 2]);
// }
// secondBiggest(arrTest)

const secBiggest = (arr) => {
    let max1 = 0;
    let max2 = 0;
    for(let i=0; i< arr.length; i++) {
        if(max1 < arr[i]) {
            max1 = arr[i];
        } if(arr[i] < max1 && arr[i] > max2) {
            max2 = arr[i];
        }
    }
    console.log(max2)
}
secBiggest(arrTest)