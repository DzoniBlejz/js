let paragraph = document.getElementById("display");

function doSomeMagic() {
	let take = document.getElementById("takenInput").value;
	let input = take.split(",").map(Number);
	let posElement = 0;
	let negElement = 0;
	let zeroElement = 0;
    let p = input.length;
    
    for(let i of input) {
        if(i < 0) {
            negElement++;
        } else if (i>0) {
            posElement++;
        } else {
            zeroElement++;
        }
    }
    paragraph.innerHTML = `pozitivnih elemenata ima: ${posElement}  njegov procenat : ${(posElement/p * 100).toFixed(2)}%<br>
                    negativnih elemenata ima: ${negElement} , njegov procenat : ${(negElement/p *100).toFixed(2)}%<br>
                    nula elemenata ima: ${zeroElement}, njegov procenat : ${(zeroElement/p *100).toFixed(2)}%`;
}

