const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});