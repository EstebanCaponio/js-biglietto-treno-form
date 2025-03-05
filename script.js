const inputAge = document.getElementById('input-age');
const inputKm = document.getElementById('input-km');
const buttonTicket = document.getElementById('submit-button');
const form = document.querySelector('form');
const outputForUser = document.getElementById('output-result');

// funzione click
// buttonTicket.addEventListener('click', function(){
form.addEventListener('submit', function (event) {

    event.preventDefault();


    outputForUser.innerHTML = "";


    const userAge = parseFloat(inputAge.value);
    console.log(userAge);

    const userKm = parseFloat(inputKm.value);
    console.log(userKm);


    // calcolo il totale
    let total = (userKm * 0.21).toFixed(2);
    console.log(`Il costo del biglietto è ${total}€`);

    // SE l'età è -18 o +65 applico sconto e stampo
    if (userAge < 18) {
        //calcolo sconto 20%
        let youngDiscount = (total * 0.2).toFixed(2);
        //calcolo il tot al netto dello sconto
        let totalYoung = (total - youngDiscount).toFixed(2);
        //stampare il risultato
        console.log(`Il costo del biglietto scontato è ${totalYoung}€`);

        const resultYoung = document.createElement("p");
        resultYoung.append(`Il costo del biglietto scontato è ${totalYoung}€`);
        outputForUser.append(resultYoung);


    } else if (userAge > 65) {
        //calcolo sconto 40%
        let seniorDiscount = (total * 0.4).toFixed(2);
        //calcolo il tot al netto dello sconto
        let totalSenior = (total - seniorDiscount).toFixed(2);
        //stampare il risultato
        console.log(`Il costo del biglietto scontato è ${totalSenior}€`);

        const resultSenior = document.createElement("p");
        resultSenior.innerText=`Il costo del biglietto scontato è ${totalSenior}€`;
        outputForUser.append(resultSenior);

    } else {
        let result = document.createElement("p");
        result.append(`Il costo del biglietto è ${total}€`);
        outputForUser.append(result);
    }

})