// Variable
const video = document.querySelector(".video"); // video
const replayBtn = document.getElementById("replay_knap"); // genafspil
const play = document.getElementById("play"); // play knap

// Event listener
video.addEventListener("ended", pilFrem);
replayBtn.addEventListener("click", genafspil);
play.addEventListener("click", start);

// Funktion
function pilFrem() {
  replayBtn.style.display = "block"; // Genafspil knappen bliver vist
}

function genafspil() {
  video.currentTime = 0; // Videoen starter fra sekund 0
  video.play(); // Videoen afspilles
  replayBtn.style.display = "none"; // skjuler genafspil pil
}

function start() {
  video.currentTime = 0; // Videoen starter fra sekund 0
  video.play(); // Videoen afspilles
  play.style.display = "none"; // skjuler pil
}
