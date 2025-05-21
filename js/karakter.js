// Variable
const billeder = ["img/pige_halv.gif", "img/dreng_halv.gif"]; // Array med billeder
let aktueltBillede = 0;

const billedeElement = document.getElementById("karakterbillede");
const venstrePil = document.getElementById("venstre");
const hoejrePil = document.getElementById("hoejre");

// Event listener - lyt på begge pile
venstrePil.addEventListener("click", skiftBillede);
hoejrePil.addEventListener("click", skiftBillede);

// Funktion
function skiftBillede() {
  // Skift mellem 0 og 1
  aktueltBillede = 1 - aktueltBillede;
  billedeElement.src = billeder[aktueltBillede];
}
