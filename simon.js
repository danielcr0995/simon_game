var gamePattern = [];
var userClickedPattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
var start=false;
var level=0

// if ($(document).keydown(nextSequence))

$(document).keydown(startGame);
 

var userChosenColor=$('.btn').click(colorChosen)

function startGame(){
    if(!start){
        nextSequence()
        $("#level-title").text('Level '+level)
        start=true
    }
}
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    
    var randomChosenColor=buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $('#'+randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);
}


function colorChosen(event){
    var color=this.id;
    userClickedPattern.push(color);
    playSound(color)
    animatePress(color)

}

function playSound(name){
    var fileName='./sounds/'+name+'.mp3';
    var sound = new Audio(fileName);
    sound.play();
}

function animatePress(currentColor){
    $('#'+currentColor).addClass('pressed');
    setTimeout(function (){
        $('#'+currentColor).removeClass('pressed')
    },100);
}


