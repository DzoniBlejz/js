let ok = () => {
    let name  = document.getElementById("name").value;
    let surname = document.getElementById("surname").value; 
    const nekaOsoba = {
        ime: name, 
        prezime: surname,
    }
    console.log(nekaOsoba)
}


