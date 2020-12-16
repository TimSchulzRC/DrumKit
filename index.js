var drumButtons = document.querySelectorAll(".drum");

function playSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(this.innerHTML);

    //   this.style.color = "white";
  }
}

for (i in drumButtons) {
  document.querySelectorAll(".drum")[i].onclick = function () {
    playSound(this.innerHTML);
  };
}

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  playSound(event.key);
});
