var scoreFromStorage = localStorage.getItem("score");
if (scoreFromStorage) {
    var scoreBoard = document.getElementById("score-board");
            scoreBoard.textContent = scoreFromStorage;
} else {
    console.log("Score not available");
}
document.addEventListener("DOMContentLoaded", function() {
    
    var playButton = document.getElementById("play-again-button");
    
   
    playButton.addEventListener("click", function() {
    
      window.location.href = "game_init.html";
    });
  });