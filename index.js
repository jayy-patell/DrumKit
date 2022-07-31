
//Detecting Button Press
var numOfDrums = document.querySelectorAll(".drum").length;

for (var i=0; i < numOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

  // this.style.color = "white";
  var buttonInnerHTML= this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
  });
}



// concept
// document.addEventListener('keydown', function(event) {
//   console.log(event);
// });

//Constructor Higher Order(take other function as input) Functions
// function BellBoy (name, age, hasworkpermit, languages) {
//   this.name=name;
//   this.age=age;
//   this.hasworkpermit=true;
//   this.languages=languages;
//   this.movesuitcase = function() {
//     alert(May I take your suitcase??);
//     pickUpSuitcase();
//     move();
//   }
// }

//Detecting KeyBoard Press
document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);   //why event.key??
});


function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio ('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio ('sounds/tom-2.mp3');
      audio.play();
      // this.style.color="white";
      break;
    case "s":
      var audio = new Audio ('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio ('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio ('sounds/crash.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio ('sounds/snare.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio ('sounds/kick-bass.mp3');
      audio.play();
      break;

    default:console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  activeButton.style.color = "white";
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
  setTimeout(function() {
    activeButton.style.color = "#DA0463";
  }, 100);

}
