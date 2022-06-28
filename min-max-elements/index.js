function doSomeMagic() {
	let list = document.getElementById("takenInput").value;
	let mainList = list.split(",").map(Number);
	let p = document.getElementById("resenje");
	let min = mainList[0];
	let max = mainList[0];

	// for (i = 0; i < mainList.length; i++) {
	// 	if (min > mainList[i]) max = mainList[i];
	// 	if (max < mainList[i]) max = mainList[i];
	// }

	mainList.forEach(element => {
		if (min > element) min = element;
	    if (max < element) max = element;
	});

	// for (const el of mainList) {
	// 	if (min > el) min = el;
	//     if (max < el) max = el;
	// }

	p.innerHTML = `upisi sta god ${max}, i ovo je najmanji: ${min}`
}
