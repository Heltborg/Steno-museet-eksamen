// Variabel der henter elementet med .kryds
const afbryd = document.querySelector(".kryds");

// Event listener
afbryd.addEventListener("click", tilForsiden);

// Funktion der fører brugeren til forsiden
function tilForsiden() {
  window.location.href = "index.html";
}
