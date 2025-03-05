const inputAge = document.getElementById('input-age');
const inputKm = document.getElementById('input-km');
const buttonTicket = document.getElementById('submit-button');

buttonTicket.addEventListener('click', function(){

const userAge = parseFloat(inputAge.value);
console.log(userAge);

const userKm = parseFloat(inputKm.value);
console.log(userKm);




})




// //chiedere all'utente quanti km vuole percorrere
// let distance = prompt("Quanti km vuoi percorre?");
// //stampare il risultato
// console.log(parseFloat(distance));
// //chiedere l'età del passeggero
// let age = prompt("quanti anni hai?");
// //stampare il risultato
// console.log(parseInt(age));
// //calcolare il prezzo del viaggio arrotondando il totale a max 2 numeri decimali:
// if (age < 18) {
//     //se x<18 totale con sconto 20%
//     let priceYoung = ((distance * 0.21)* 0.8);
//     //stampare il risultato
//     console.log(`Il prezzo del tuo biglietto è ${priceYoung.toFixed(2)}€`);
// } else if (age > 65) {
//     //altrimenti se x>65 totale sconto 40%
//     let priceSenior = ((distance * 0.21)* 0.6);
//     //stampare il risultato
//     console.log(`Il prezzo del tuo biglietto è ${priceSenior.toFixed(2)}€`);
// } else {
//     //altrimenti totale senza sconto
//     let normnalPrice = (distance * 0.21);
//     //stampare il risultato
//     console.log(`Il prezzo del tuo biglietto è ${normnalPrice.toFixed(2)}€`);
// }


// // secondo metodo includendo separatamente il calcolo dello sconto
// console.log(`SECONDO METODO`);

// // calcolo il totale
// let total = (distance * 0.21).toFixed(2);
// console.log(`Il costo del biglietto è ${total}€`);

// // SE l'età è -18 o +65 applico sconto e stampo
// if (age < 18) {
//     //calcolo sconto 20%
//     let youngDiscount = (total* 0.2).toFixed(2);
//     //stampare il risultato
//     console.log(`Essendo minorenne hai diritto allo sconto del 20% che ammonta a ${youngDiscount}€`);
//     //calcolo il tot al netto dello sconto
//     let totalYoung = (total - youngDiscount).toFixed(2);
//     //stampare il risultato
//     console.log(`Il costo del biglietto scontato è ${totalYoung}€`);
// } else if (age > 65) {
//     //calcolo sconto 40%
//     let seniorDiscount = (total* 0.4).toFixed(2);
//     //stampare il risultato
//     console.log(`Essendo over-65 hai diritto allo sconto del 40% che ammonta a ${seniorDiscount}€`);
//     //calcolo il tot al netto dello sconto
//     let totalSenior = (total - seniorDiscount).toFixed(2);
//     //stampare il risultato
//     console.log(`Il costo del biglietto scontato è ${totalSenior}€`);
// }