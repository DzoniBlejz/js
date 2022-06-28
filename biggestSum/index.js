// nekiNiz = [91, 17, 62, 86, 29, 11, 37, 89, 22, 81, 35, 67, 78, 41, 64, 64, 21, 14, 85, 22, 17, 68, 51, 44, 95, 29, 56, 9, 2, 22, 1, 35, 40, 29, 71, 32, 61, 35, 31, 96, 47, 43, 77, 64, 97, 27, 20, 66, 83, 27]

function maxSum(arr, window) {
	suma = 0;
	let i = 0;
	highestSum = 0;
    if(window>arr.length) {
        alert("Windows je veci od duzine niza!")
    }

	for (i = 0; i <= arr.length-window; i++) {
        console.log(arr[i])
        s=0;
        for(let j = 0; j < window; j++) {
            s+=arr[i+j];
        }
        if(s>suma) {
            suma=s;
        }

    }
	return suma;
}

console.log(maxSum([1,20,3,4,5], 2));
