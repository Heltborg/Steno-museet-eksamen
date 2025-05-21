// Variabel
const indhold = document.querySelector(".indhold");

// Event listener
window.addEventListener("load", forsinkKonfetti); // Når siden bliver indlæst ("load"), så starter funktionen der forsinker konfettien

// Funktion
// Forsinker konfetti
function forsinkKonfetti() {
  setTimeout(startKonfetti, 500); // Der går 0,5 sekunder før konfettien starter
}

// Vi kalder funktionen startKonfetti og fortæller hvordan det skal se ud
function startKonfetti() {
  party.confetti(indhold, {
    count: 500, // Hvor mange stykker konfetti vi vil have
    spread: 1, // Hvor bredt det spreder sig på skærmen
  });
}
