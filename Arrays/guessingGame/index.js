function guessANumber() {
    const number = Math.floor(Math.random() * 11);
    let guess;
    do {
        guess= prompt("Type in the number: ");
        if(guess > number) {
            alert("The number is too high!");
        } else if (guess < number) {
            alert("The number is too small!");
        }
    }

    while(guess != number);
    {
        alert("You got the right number!");
    }
 }

 guessANumber();