var x = document.getElementById();
var button = document.getElementById("playpause");
function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

var numberr = 50 + showRandomNumber;


document.getElementById("playpause").addEventListener("click", function() {
    
      var randomwith = Math.floor(Math.random() * window.innerWidth);
      var randomhite = Math.floor(Math.random() * window.innerHeight);

     
      var button = document.getElementById('playpause');
      button.style.position = "absolute"; 
      button.style.top = randomhite + 'px';  
      button.style.left = randomwith + 'px';  
    });
    