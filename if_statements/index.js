
var a = prompt("Unesite prvi broj:");
var b = prompt("Unesite prvi broj:");

a = parseInt(a);
b = parseInt(b);

if(a>=b) {
    console.log("prvi broj" + a + "je veci od " + b);
}
if(a<=b){
    console.log("drugi broj je veci");
} else {
    console.log("bataljuj");
}