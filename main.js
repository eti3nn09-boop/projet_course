function jouerSon(id) {
  const audio = document.getElementById(id);
  
  if (!audio) {
    alert("Audio introuvable : " + id);
    return;
  }
  
  audio.currentTime = 0;
  audio.play()
    .then(() => console.log("Son joué :", id))
    .catch(err => alert("Erreur audio : " + err));
}
window.addEventListener("DOMContentLoaded", () => { 

  const button = document.getElementById("phare");
  const phare = document.querySelectorAll(".phare");
  let allume = false;

  button.addEventListener("click", () => {
        allume = !allume;
        
        phares.forEach(phare => {
          phare.classList.toggle("on", allume);
        });
    
        button.textContent = allume ? "Eteindre les phares" : "allumer lees phares";
  });
});
console.log("script chargé");

