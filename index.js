
// Add a event Listener to all buttons
var numberOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML=this.innerHTML;

    playAudio(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}


//Add key board event listener
addEventListener("keypress",function(event){

    playAudio(event.key);

    buttonAnimation(event.key);

})

  
function playAudio(keyValue){
    switch (keyValue) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(keyValue);
            break;
    }
  }


  function buttonAnimation(keyValue){
    var activeButton=document.querySelector("." + keyValue);
    
    activeButton.classList.add("pressed");

    // Time out function to remove the presses class after certain amount of time
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
  }

