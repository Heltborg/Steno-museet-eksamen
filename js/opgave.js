// Variable: Find videoen
const video = document.querySelector(".opgave_video");
const side = window.location.pathname;

// Funktion der forsinker videoafspilning
function delayVideoStart() {
  video.pause(); // Stop autoplay
  setTimeout(startVideo, 500); // Der går 0,5 sekunder før videoen starter
}

// Funktion der starter videoen efter der er gået 0,5 sekunder
function startVideo() {
  video.play(); // Videoen afspilles
}

// Event listener
window.addEventListener("load", delayVideoStart); // Når siden bliver indlæst ("load"), så starter funktionen (delayVideoStart) der forsinker videoen lidt

// SKIFT TIL NÆSTE SIDE
// Event listener: Skift til næste side når videoen er slut
video.addEventListener("ended", skiftSide);

// Funktion: Skift til næste side
function skiftSide() {
  if (side === "/hurtig_opgave.html") {
    window.location.href = "langsom_info.html";
  } else if (side === "/langsom_opgave.html") {
    window.location.href = "flot_klaret.html";
  }
}
