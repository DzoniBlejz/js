// unosi se proizvoljan broj elemenata
// napravite sumu elemenata, i proverite je l suma pozitivna ili negativna i upisati u p element

function doSomeMagic() {
    let paragraph = document.getElementById("display");
    let list = document.getElementById("takenInput").value;
    let mainList = list.split(",").map(Number);
    let suma=0;

    for(let i of mainList) {
        suma+=i;
        if(suma > 0) {
            paragraph.innerHTML = `suma ${suma} je pozitivna <br>`;
        } else {
            paragraph.innerHTML = `suma ${suma} je negativna <br>`;
        }
    }
}