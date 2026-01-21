function klaxon() {
  const audio = document.getElementById("klaxon");
  audio.currentTime = 0;
  audio.play();
}

navigator.vibrate(50);
