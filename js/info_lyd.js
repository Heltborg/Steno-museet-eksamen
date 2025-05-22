// Variabler lunger
const lungerIkon = document.querySelector("#lunger_sektion .lyd_ikon"); // Tager fat i lydikonet
const audioLunger = document.querySelector("#lunger_sektion audio"); // Tager fat i audio/lyd

// Variabler hjerte
const hjerteIkon = document.querySelector("#hjerte .lyd_ikon"); // Tager fat i lydikonet
const audioHjerte = document.querySelector("#hjerte audio"); // Tager fat i audio/lyd

//Event listener lunger
lungerIkon.addEventListener("click", afspilLungerLyd); // Registrerer når der bliver klikket på lydikonet, og så starter den funktionen afspilLungerLyd

//Event listener hjerte
hjerteIkon.addEventListener("click", afspilHjerteLyd); // Registrerer når der bliver klikket på lydikonet, og så starter den funktionen afspilHjerteLyd

// Funktion lunger
function afspilLungerLyd() {
  audioLunger.play(); // Starter afspilning af audio/lyd
}

// Funktion hjerte
function afspilHjerteLyd() {
  audioHjerte.play(); // Starter afspilning af audio/lyd
}
