// Variabel
const lydIkon = document.querySelector(".tekstboks_opgave .lyd_opgave"); // Tager fat i lydikonet
const audio = document.querySelector(".tekstboks_opgave audio"); // Tager fat i audio/lyd


//Event listener
lydIkon.addEventListener("click", afspilLyd); // Registrerer når der bliver klikket på lydikonet, og så starter den funktionen afspilLyd


// Funktion
function afspilLyd() {
  audio.play(); // Starter afspilning af audio/lyd
}