var a = prompt("unesite prvi broj: ");
var b = prompt("unesite drugi broj: ");

a = parseInt(a);
b = parseInt(b);

var operator = prompt("unesite operator: ");

var mainCondition = typeof a === "number" && typeof b === "number"
                    && !isNaN(a) && !isNaN(b);
console.log(mainCondition);



if(mainCondition){
    var result;
    if(operator === "-"){
        result = a-b;
        
        console.log("Uneta operacija je oduzimanje", result);
    }
    else if ( operator === "+") {
        result = a+b;
        
        console.log("Uneta operacija je sabiranje" , result);
    }
    else if ( operator === "*") {
        result = a*b;
        
        console.log("Uneta operacija je mnozenje" , result);
    }
    else if (operator === "/") {
        result = a/b;
        console.log("Uneta operacija je deljenje", result);
    }
    else {
        console.log("Uneli ste pogresan operand");
    }

}