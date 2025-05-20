document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video");
  const replayBtn = document.querySelector(".replay_knap");

  video.addEventListener("ended", function () {
    replayBtn.style.display = "block";
  });

  replayBtn.addEventListener("click", function () {
    video.currentTime = 0;
    video.play();
    replayBtn.style.display = "none";
  });
});
