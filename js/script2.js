// pari e dispari
// toLowerCase trasforma tutte le lettere in minuscolo!
// .trim toglie spazi prima e dopo la stringa

let oddOrEven = prompt("pari o dispari").trim().toLowerCase();
while (oddOrEven != "pari" && oddOrEven != "dispari"){
    oddOrEven = prompt("pari o dispari").trim().toLowerCase();
}

let numUtente = Number.parseInt(prompt("scegliu numero da 1 a 5").trim(), 10);
while (Number.isNaN(numUtente) || numUtente < 1 || numUtente > 5) {
    userNumber = Number.parseInt(prompt("scegliu numero da 1 a 5").trim(),10);
}
console.log(oddOrEven, numUtente);