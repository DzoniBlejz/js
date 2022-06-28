// Array.prototype.myForEach = function(callback) {
//     let arr = this;
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
// }

// niz.myForEach((value, index, objekat) =>
// {console.log(value, index, objekat)})

// Array.prototype.myMap = function(callback){
//     let emptyArr = []
//     let arr = this;
//     for (let i = 0; i < arr.length; i++) {
//         emptyArr.push(callback(arr[i], i, arr))
//     }
//     return emptyArr;
// }

// const a = niz.myMap((value, index, niz) => {
//     return {vrednost: value, indeks: index }
// })
// console.log(a)

// let test = (arr, callback, callback2) => {
//     let p1 = [];
//     let p = [];
//     let c = 3;
//     for (let i = 0; i < arr.length; i++) {
//         p.push(callback(arr[i], i, arr));
//         p1.push(callback2(arr[i], i, arr));
//     }
//     return [p, p1]
// }

// let proba = test(niz, function (value, index, niz)  {
//     return 2
// }, (v, i, n) => {
// return v * 2
// })

// console.log(proba)


// Array.prototype.myFilter = (arr, clbk) => {
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(clbk(arr[i], i, arr)) {
//             array.push(arr[i]) }
//     }
//         return array;
// }

// let p = niz.myFilter(niz, (value) => {
//     return value > 2;
// }).map(cbk => {
//     if(cbk % 2 === 0) {
//         return cbk * 3;
//     } else 
//     return cbk;
// })

// console.log(p)


 

