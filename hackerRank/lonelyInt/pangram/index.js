let pangram = "We promptly judged antique ivory buckles for the next prize";

const isPangram = (str) => {
	let toLower = str.toLowerCase();
	let abc = "abcdefghijklmnopqrstuvwxyz";
    for(let char of abc) {
        if(!(toLower.includes(char))) {
        console.log("nije pangram")
        return false;
        }
    } 
    console.log("jeste Pangram");
    return true;
};

isPangram(pangram);
