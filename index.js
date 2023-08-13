

var len = document.querySelectorAll(".drum").length;
var sound = [
                "sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3",
                "sounds/snare.mp3","sounds/crash.mp3","sounds/kick-bass.mp3"
              ];

for(var i=0;i<len;i++){

    let instrument = document.querySelectorAll(".drum")[i];
    let text = instrument.textContent;

    instrument.addEventListener("click",function(){
        playSound(text);
        buttonAnimation(text);
    });

}


function playSound(text){
    if(text == 'w'){
        let audio = new Audio(sound[0]);
        audio.play();  
    }
    else if(text == 'a'){
        let audio = new Audio(sound[1]);
        audio.play(); 
    }
    else if(text == 's'){
        let audio = new Audio(sound[2]);
        audio.play(); 
    }
    else if(text == 'd'){
        let audio = new Audio(sound[3]);
        audio.play(); 
    }
    else if(text == 'j'){
        let audio = new Audio(sound[4]);
        audio.play(); 
    }
    else if(text == 'k'){
        let audio = new Audio(sound[5]);
        audio.play(); 
    }
    else if(text == 'l'){
        let audio = new Audio(sound[6]);
        audio.play(); 
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }