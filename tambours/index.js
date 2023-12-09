/* detection des clicks*/
var bouttons =document.getElementsByClassName("drum");
for( var i=0;i<bouttons.length ; i++){
 bouttons[i].addEventListener("click",function cliker(){
   var lettre = this.innerHTML;
   appuyer (lettre);
   dureAnimation(lettre)
 })    
}
/* detection clavier */

document.addEventListener("keypress",function clavier (evens){
    appuyer(evens.key)
    dureAnimation(evens.key)
})

function dureAnimation(lettre){
 var localisation = document.querySelector("."+lettre);
 localisation.classList.add("pressed");
 setTimeout(function(){
    localisation.classList.remove("pressed"); 
 },100);

}
function appuyer (bouttonAppuyer){
    switch(bouttonAppuyer){
        case "w":
            var audios = new Audio("./sounds/tom-1.mp3");
            audios.play();
            break;
            case "a":
                var audios = new Audio("./sounds/tom-2.mp3");
                audios.play();
                break;
                case "s":
                    var audios = new Audio("./sounds/tom-3.mp3");
                    audios.play();
                    break; 
                    case "d":
                    var audios = new Audio("./sounds/tom-4.mp3");
                    audios.play();
                    break;    
                    case "j":
                        var audios = new Audio("./sounds/crash.mp3");
                        audios.play();
                        break;  
                        case "k":
                            var audios = new Audio("./sounds/kick-bass.mp3");
                            audios.play();
                            break;
                            case "l":
                            var audios = new Audio("./sounds/snare.mp3");
                            audios.play();
                            break;
                                
    }
}
