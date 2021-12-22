var gamePattern = [];
var userClickedPattern=[];
var buttonColors=["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    
    var randomChosenColor=buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $('#'+randomChosenColor).fadeOut(100).fadeIn(100);

    var fileName='./sounds/'+randomChosenColor+'.mp3';
    var sound = new Audio(fileName);
    sound.play();

}

var userChosenColor=$('.btn').click(colorChosen)



function colorChosen(event){
    var color=this.id;
    userClickedPattern.push(color);

}

function playSound(name){
    var fileName='./sounds/'+name+'.mp3';
    var sound = new Audio(fileName);
    sound.play();
}

function colorAudio(){
    var fileName='./sounds/'+randomChosenColor+'.mp3';
    var colorSound=new Audio(fileName);
    colorSound.play();
}


